// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  // Archivos y carpetas que NO se lintean.
  {
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      'data/',
      'docs/',
      // Generado por Astro (triple-slash idiomático).
      'src/env.d.ts',
      // Autogenerados (ver CLAUDE.md): enormes y no se editan a mano.
      'src/data/intelligence-index.ts',
      'src/data/intelligence-index-types.ts',
      'src/data/auto-models.ts',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // Scripts de cliente embebidos en .astro corren en el navegador.
  {
    files: ['**/*.astro'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },

  // Reglas del proyecto: detectar problemas sin bloquear por estilo heredado.
  {
    rules: {
      // Marca los `any` que queremos ir eliminando, sin romper el lint.
      '@typescript-eslint/no-explicit-any': 'warn',
      // Permite `_unused` para argumentos intencionadamente sin usar.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
);
