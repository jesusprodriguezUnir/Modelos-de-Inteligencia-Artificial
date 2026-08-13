// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'dist/',
      '.next/',
      'out/',
      'node_modules/',
      '.venv/',
      'data/',
      'docs/',
      'public/',
      'next-env.d.ts',
      'src/data/intelligence-index.ts',
      'src/data/intelligence-index-types.ts',
      'src/data/auto-models.ts',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
);
