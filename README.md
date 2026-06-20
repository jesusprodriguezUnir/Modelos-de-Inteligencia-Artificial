# Catálogo de Modelos de IA para Programación

Web estática (Astro + TypeScript, **sin backend**) que lista los modelos de IA actuales agrupados por empresa, con precios, contexto, ejemplos de uso, acceso a playgrounds y vídeos de referencia.

## Características

- Agrupación por empresa (Anthropic, OpenAI, Google, Microsoft, xAI, Meta, Mistral, y proveedores chinos: DeepSeek, Qwen, GLM, Kimi, MiniMax, MiMo, ERNIE, Hunyuan, Step) + OpenCode.
- Buscador global y filtros por origen (EE.UU./Europa/China/Open) y categoría (código, razonamiento, agéntico, etc.).
- Dos vistas: **tarjetas** y **tabla** comparativa.
- **Comparador** lado a lado de hasta 4 modelos.
- Detalle con precios, ejemplos de código (con copiar), botones a playground/docs y vídeos.

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera /dist estático
npm run preview  # sirve el build
```

El resultado de `npm run build` es estático: desplegable tal cual en GitHub Pages, Vercel, Netlify o cualquier hosting de archivos.

> Para GitHub Pages en subruta, descomenta `site` y `base` en `astro.config.mjs`.

## Actualizar datos del Intelligence Index

Para refrescar los datos del Intelligence Index y que la web muestre los modelos más recientes, ejecuta:

```bash
pip install -r requirements-scripts.txt
python scripts/fetch_intelligence_index.py --verbose
```

Si solo quieres actualizar secciones concretas, puedes usar:

```bash
python scripts/fetch_intelligence_index.py --sections intelligence_index,price_cost
```

## Mantener el catálogo

**Fuente de verdad única:** `src/data/models.ts`. Añadir o actualizar un modelo = editar ese array (tipado con `src/data/types.ts`, con autocompletado y validación). No hay que tocar la UI.

```ts
{
  id: 'nuevo-modelo',
  company: 'OpenAI',          // debe existir en `companies`
  origin: 'US',
  kind: 'model',
  displayName: 'Nuevo Modelo',
  category: ['coding', 'reasoning'],
  context: 200_000,
  pricing: { inputPer1M: 2, outputPer1M: 10, currency: 'USD' },
  modalities: ['text'],
  apiModelString: 'nuevo-modelo',
  playgroundUrl: '...',
  docsUrl: '...',
}
```

## Aviso

Precios y especificaciones a **junio de 2026**. Cambian con frecuencia: verifica siempre en la web oficial (botón «Docs») antes de presupuestar. Los marcados como `approx: true` están pendientes de confirmación.
