import tseslint from 'typescript-eslint';

import playlistoConfig from './index.js';

export default tseslint.config(
  {
    ignores: ['node_modules/**'],
    files: ['**/*.js'],
  },
  playlistoConfig,
);
