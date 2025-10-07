import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    ...pluginVue.configs['flat/strongly-recommended'],
  ],
  files: ['**/*.{ts,vue}'],
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser,
    }
  },
});
