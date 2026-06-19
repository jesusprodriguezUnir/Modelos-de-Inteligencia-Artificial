import { defineConfig } from 'astro/config';

// Sitio 100% estático (SSG). Sin backend.
// Para desplegar en subruta (GitHub Pages), descomenta `base`.
export default defineConfig({
  // site: 'https://tu-usuario.github.io',
  // base: '/catalogo-modelos-ia',
  build: { format: 'file' },
});
