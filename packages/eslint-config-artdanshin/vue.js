import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  {
    extends: [
      ...pluginVue.configs['flat/strongly-recommended'],
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      }
    },
    rules: {
      'vue/script-indent': ['error', 2, {
        baseIndent: 1,
        switchCase: 0,
        ignores: []
      }]
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      '@stylistic/indent': 'off'
    },
  }
]);
