# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es esto

Web estática (Astro 4 SSG + TypeScript, **sin backend**) que cataloga modelos de IA para programación, agrupados por empresa, con precios, contexto, ejemplos de código, enlaces a playground/docs y vídeos. El build genera HTML plano en `/dist`, desplegable en cualquier hosting de archivos.

Idioma del proyecto: **español** (UI, comentarios y datos). Mantén tildes y signos correctos.

## Comandos

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera /dist estático
npm run preview  # sirve el build

# Actualizar datos del Intelligence Index y refrescar los modelos más recientes en la web (requiere Python 3.12)
pip install -r requirements-scripts.txt
python scripts/fetch_intelligence_index.py --verbose          # escribe todas las salidas
python scripts/fetch_intelligence_index.py --dry-run          # no escribe nada
python scripts/fetch_intelligence_index.py --sections intelligence_index,price_cost
```

Tests: `npm test` corre 3 tests de `catalog-utils.test.ts`. Validación real: `npm run build` (Astro hace type-check de los `.astro` y de `src/data/*.ts`).

## ⚠️ Archivos autogenerados — NO mergear a mano

Los siguientes archivos son **100% regenerados** por scripts Python automáticos. Si aparecen conflictos de merge:

- `data/intelligence-index.json`, `data/intelligence-index.jsonl`, `data/intelligence-index-master.json`
- `docs/intelligence-index.md`
- `src/data/intelligence-index.ts`, `src/data/intelligence-index-types.ts`
- `src/data/auto-models.ts`

**Estrategia**: En vez de resolver el conflicto manualmente:

```bash
# 1. Regenerar desde cero
python scripts/fetch_intelligence_index.py
python scripts/build_auto_catalog.py

# 2. Verificar que el build pasa
npm run build

# 3. Commitear
git add data/ docs/ src/data/
git commit -m "Regenerar autogenerados (fecha AAAA-MM-DD)"
```

El archivo [`.gitattributes`](.gitattributes) está configurado con `merge=ours` para estos archivos: en caso de merge automático, Git toma HEAD (local) y evita conflictos manuales.

## Arquitectura

Dos fuentes de datos que **se fusionan** en tiempo de build (sin fetch en cliente): el catálogo curado manda, y el Intelligence Index lo refresca y lo amplía.

### 1. Catálogo curado a mano — `src/data/models.ts` (fuente de verdad)

- Tipado por [src/data/types.ts](src/data/types.ts). Añadir/editar un modelo = editar el array `rawModels` y `curatedCompanies`; **no se toca la UI**.
- `companies` (export) es un `Record` por clave de empresa: cada modelo referencia `company` y esa clave **debe existir** ahí (de ahí salen `accent`, `origin`, `blurb`). Se construye fusionando `curatedCompanies` (mandan) con `autoCompanies`.
- `kind: 'model'` para LLMs; `kind: 'tool'` para agentes/IDEs (Cursor, Copilot, OpenCode…). Las páginas filtran por este campo.
- Los exports al final del archivo derivan datos: `models` fusiona `popularity` curada (mapa `POPULARITY` → cae a 30 si falta), y `POPULARITY_TIERS`/`popularityTier()` agrupan el catálogo. `index.astro` los usa para las secciones por popularidad.
- Ejemplos de código se construyen con helpers reutilizables (`pyAnthropic`, `pyOpenAI`, `tsGoogle`, …) para no repetir snippets.

### 1b. Puente auto — `src/data/auto-models.ts` (autogenerado, NO editar a mano)

- [scripts/build_auto_catalog.py](scripts/build_auto_catalog.py) lee `data/intelligence-index-master.json` (NO raspa la web; reutiliza lo que ya bajó el fetcher) y genera `src/data/auto-models.ts` con: `autoModels` (top 50 por `coding_index`, no deprecados, `kind: 'model'`), `autoSpecs` (specs frescas de TODO el master por slug) y `autoCompanies` (empresas de creators aún no catalogados).
- La **fusión** vive al final de [src/data/models.ts](src/data/models.ts) (`refreshCurated` + dedupe por `iiSlug`/`id`/`apiModelString`). Reglas: lo curado tiene prioridad absoluta; de lo auto solo se toma (1) refresco de precio/contexto/benchmarks de un curado cuando falta o es `approx`, y (2) modelos nuevos que no casen con ningún curado (marcados `autoImported: true`, popularidad → tier "Emergentes"). Nunca se pisan `examples`/`videos`/`notes`/`displayName`/`popularity` curados.
- Enlace curado↔Index: campo opcional `iiSlug` en `Model` (fallback al `id`). El master no trae SWE-bench Pro ni ejemplos/vídeos: eso sigue siendo curado a mano.
- Regenerar a mano: `python scripts/build_auto_catalog.py --verbose` (acepta `--top N`, `--dry-run`).

### 2. Intelligence Index — autogenerado, NO editar a mano

- [scripts/fetch_intelligence_index.py](scripts/fetch_intelligence_index.py) raspa `artificialanalysis.ai`. Detalle clave: la página es una SPA Next.js con RSC; los datos van embebidos en bloques `self.__next_f.push([1,"..."])` del HTML, no en una API JSON. El script los extrae con `httpx` (rápido) y tiene fallback con Playwright.
- Salidas que regenera el script (todas marcadas como autogeneradas):
  - `data/intelligence-index.json` — snapshot consolidado
  - `data/intelligence-index.jsonl` — histórico (append, 1 línea/día)
  - `data/intelligence-index-master.json`
  - `src/data/intelligence-index.ts` — módulo TS importable (exporta `intelligenceIndexMaster`, `intelligenceIndexMeta`, `lastUpdated`, …). Es enorme (~24k líneas); léelo con offset/limit.
  - `docs/intelligence-index.md` — informe legible
  - `data/raw/<fecha>/` — payloads crudos (gitignored)
- Los tipos viven en [src/data/intelligence-index-types.ts](src/data/intelligence-index-types.ts); usa `MasterRow`/`master_table` para acceder a métricas por modelo con tipado.
- Se actualiza solo a diario vía GitHub Action [.github/workflows/update-daily.yml](.github/workflows/update-daily.yml) (08:00 UTC): raspa el Index, luego corre `build_auto_catalog.py` para regenerar `auto-models.ts`, y commitea todo en un único commit del bot.

### Páginas — `src/pages/*.astro`

Cuatro páginas estáticas que comparten [src/layouts/Layout.astro](src/layouts/Layout.astro) (recibe `active` para marcar la pestaña):
- `index.astro` — catálogo principal (tarjetas/tabla, buscador, filtros, comparador). La interactividad es JS vanilla inline en la página, operando sobre datos ya renderizados en HTML.
- `benchmarks.astro` — ranking por benchmarks de coding (lee `m.benchmarks` de los modelos curados).
- `local.astro`, `tools.astro` — modelos open-weight locales y herramientas/agentes.

`astro.config.mjs` usa `build.format: 'file'` (genera `pagina.html`, no `pagina/index.html`). Para desplegar en subruta (GitHub Pages) hay que descomentar `site`/`base`.

## Convenciones

- Precios y specs están fechados a **junio de 2026** y cambian a menudo; los aproximados llevan `approx: true` / sufijo `~` en la UI. No inventes valores: verifica en la web oficial del modelo.
- Helpers de formato (`fmtCtx`, `fmtPrice`) se repiten en varias páginas; si cambias el formato, búscalos en todas.
