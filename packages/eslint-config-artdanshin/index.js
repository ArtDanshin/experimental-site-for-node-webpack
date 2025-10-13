import globals from 'globals';
import tseslint from 'typescript-eslint';

import importConfig from './import.js';
import javascript from './javascript.js';
import typescript from './typescript.js';
import stylistic from './stylistic.js';
import unicorn from './unicorn.js';

export default tseslint.config([
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  javascript,
  typescript,
  stylistic,
  importConfig,
  unicorn,
]);
