const safePostCssParser = require('postcss-safe-parser');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function() {
  return new OptimizeCSSAssetsPlugin({
    cssProcessorOptions: {
      parser: safePostCssParser,
      map: false
    },
    cssProcessorPluginOptions: {
      preset: ['default', {
        // Это правило заставляет неправильно работать фолбэки в CSS
        mergeLonghand: false
      }]
    },
  });
};
