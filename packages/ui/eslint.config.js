import commonConfig from 'eslint-config-artdanshin/index.js'
import vueConfig from 'eslint-config-artdanshin/vue.js'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [commonConfig, vueConfig],
  ignores: ['dist/**', 'node_modules/**', 'coverage/**', '*.config.js'],
  files: ['**/*.{js,ts,vue}'],
})