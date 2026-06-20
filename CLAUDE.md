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

# Actualizar datos del Intelligence Index (requiere Python 3.12)
pip install -r requirements-scripts.txt
python scripts/fetch_intelligence_index.py --verbose          # escribe todas las salidas
python scripts/fetch_intelligence_index.py --dry-run          # no escribe nada
python scripts/fetch_intelligence_index.py --sections intelligence_index,price_cost
```

No hay tests ni linter configurados. La validación real es `npm run build` (Astro hace type-check de los `.astro` y de `src/data/*.ts`).

## Arquitectura

Dos fuentes de datos independientes, ambas consumidas en tiempo de build (sin fetch en cliente):

### 1. Catálogo curado a mano — `src/data/models.ts` (fuente de verdad única)

- Tipado por [src/data/types.ts](src/data/types.ts). Añadir/editar un modelo = editar el array `rawModels` y el objeto `companies`; **no se toca la UI**.
- `companies` es un `Record` por clave de empresa: cada modelo referencia `company` y esa clave **debe existir** ahí (de ahí salen `accent`, `origin`, `blurb`).
- `kind: 'model'` para LLMs; `kind: 'tool'` para agentes/IDEs (Cursor, Copilot, OpenCode…). Las páginas filtran por este campo.
- Los exports al final del archivo derivan datos: `models` fusiona `popularity` curada (mapa `POPULARITY` → cae a 30 si falta), y `POPULARITY_TIERS`/`popularityTier()` agrupan el catálogo. `index.astro` los usa para las secciones por popularidad.
- Ejemplos de código se construyen con helpers reutilizables (`pyAnthropic`, `pyOpenAI`, `tsGoogle`, …) para no repetir snippets.

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
- Se actualiza solo a diario vía GitHub Action [.github/workflows/update-daily.yml](.github/workflows/update-daily.yml) (08:00 UTC), que commitea los cambios.

### Páginas — `src/pages/*.astro`

Cuatro páginas estáticas que comparten [src/layouts/Layout.astro](src/layouts/Layout.astro) (recibe `active` para marcar la pestaña):
- `index.astro` — catálogo principal (tarjetas/tabla, buscador, filtros, comparador). La interactividad es JS vanilla inline en la página, operando sobre datos ya renderizados en HTML.
- `benchmarks.astro` — ranking por benchmarks de coding (lee `m.benchmarks` de los modelos curados).
- `local.astro`, `tools.astro` — modelos open-weight locales y herramientas/agentes.

`astro.config.mjs` usa `build.format: 'file'` (genera `pagina.html`, no `pagina/index.html`). Para desplegar en subruta (GitHub Pages) hay que descomentar `site`/`base`.

## Convenciones

- Precios y specs están fechados a **junio de 2026** y cambian a menudo; los aproximados llevan `approx: true` / sufijo `~` en la UI. No inventes valores: verifica en la web oficial del modelo.
- Helpers de formato (`fmtCtx`, `fmtPrice`) se repiten en varias páginas; si cambias el formato, búscalos en todas.
