import commonConfig from 'eslint-config-artdanshin/index.js'
import vueConfig from 'eslint-config-artdanshin/vue.js'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '*.config.js'],
  },
  {
    files: ['**/*.{js,ts,vue}'],
  },
  commonConfig,
  {
    files: ['**/*.vue'],
  },
  vueConfig
)