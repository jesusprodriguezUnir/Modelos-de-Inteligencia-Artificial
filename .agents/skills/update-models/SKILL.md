---
name: update-models
description: Actualiza los modelos de IA, benchmarks (Artificial Analysis, OpenRouter), precios, catálogo autogenerado y la fecha/versión de actualización del sitio. Usar cuando se pida "actualizar modelos", "refrescar benchmarks", "update models", "actualizar catálogo", "actualizar fecha" o "sincronizar modelos".
license: MIT
metadata:
  author: modelia-team
  version: "1.0"
---

# Actualización de Modelos, Benchmarks y Versión de la Web

Guía y flujo de trabajo para actualizar los datos de los modelos de inteligencia artificial, precios, benchmarks y refrescar automáticamente la fecha de última actualización que se muestra en toda la web (`modelosia.org`).

---

## ⚡ Comando Rápido (Todo en Uno)

Para ejecutar la actualización completa, verificar tests y compilar el sitio:

```bash
npm run update:all
```

O ejecutando solo la parte de actualización de datos:

```bash
npm run update:models
```

---

## 🔄 Flujo de Trabajo Detallado

El proceso se compone de 4 pasos secuenciales:

### 1. Extraer datos y benchmarks del Intelligence Index
Descarga los benchmarks más recientes (GDPval-AA v2, Terminal-Bench, SciCode, HumanEval, LiveCodeBench, GPQA Diamond, etc.) y la metadata de modelos desde Artificial Analysis:

```bash
python scripts/fetch_intelligence_index.py --verbose
```

> **¿Qué hace con la fecha?**
> Este script actualiza el campo `fetched_at` (marca de tiempo UTC ISO 8601) en `data/intelligence-index.json` y `src/data/intelligence-index.ts`. La función `readIndexMeta()` en `src/lib/index-meta.ts` lee esta marca y la convierte automáticamente en el texto visible en el footer (`Datos actualizados a ...`) y en las fichas de los modelos.

### 2. Enriquecer precios y contexto con OpenRouter (Multifuente)
Consulta la API pública de OpenRouter para obtener precios exactos de entrada/salida por millón de tokens y ventanas de contexto:

```bash
python scripts/fetch_multi_sources.py --verbose
```
- Genera: `data/multi-source-enrichment.json`

### 3. Reconstruir el catálogo auto-generado
Genera el puente TypeScript que fusiona los modelos curados con los datos frescos del Index y OpenRouter:

```bash
python scripts/build_auto_catalog.py --verbose
```
- Genera: `src/data/auto-models.ts` (top modelos por coding, specs y nuevas empresas detectadas).

### 4. Validar tests y compilar Next.js
Asegura que las dependencias de tipos, IDs y páginas estáticas compilen sin errores:

```bash
npm test
npm run build
```

---

## 📂 Archivos Autogenerados (NO editar a mano)

Los siguientes archivos se sobreescriben al ejecutar los scripts de actualización:

- `data/intelligence-index.json` (Snapshot con fecha `fetched_at` y métricas clave)
- `data/intelligence-index-master.json` (Tabla maestra de todos los modelos analizados)
- `data/intelligence-index.jsonl` (Historial diario en formato JSONL)
- `data/multi-source-enrichment.json` (Datos de precios y contexto de OpenRouter)
- `docs/intelligence-index.md` (Informe y ranking legible en Markdown)
- `src/data/intelligence-index.ts` (Módulo TypeScript con metadata y tabla maestra)
- `src/data/intelligence-index-types.ts` (Tipos TypeScript de las filas del índice)
- `src/data/auto-models.ts` (Catálogo autogenerado consumido por `src/data/models.ts`)

---

## 🕒 Cómo se propaga la fecha/versión de actualización a la Web

1. `fetch_intelligence_index.py` escribe `fetched_at` en `data/intelligence-index.json`.
2. `src/lib/index-meta.ts` exporta `readIndexMeta()`, que lee `fetched_at`.
3. `src/lib/catalog.ts` formatea la fecha como `meta.fetchedLabel` (ej. `"18 de agosto de 2026"`) y `meta.fetchedShort` (ej. `"18 ago 2026"`).
4. Los componentes `SiteFrame`, `Footer` y las páginas dinámicas `/modelos/[slug]` renderizan la etiqueta actualizada.

---

## 🛠️ Resolución de Problemas

- **Si falla la conexión con Artificial Analysis**: El script intentará primero la extracción vía RSC-HTML directa; si cambia el prerender de Vercel, caerá automáticamente al fallback con Playwright (`playwright install chromium`).
- **Si faltan paquetes Python**:
  ```bash
  pip install -r requirements-scripts.txt
  ```
- **Si hay modelos curados con precios manuales**: El catálogo curado en `src/data/models.ts` siempre tiene prioridad absoluta. Los datos autogenerados solo completan campos faltantes o marcados como aproximados (`approx: true`).
