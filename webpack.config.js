const path = require('path');
const { isProduction } = require('./config/webpack/utils/helper');

module.exports = {
  mode: isProduction() ? 'production' : 'development',

  entry: {
    application: path.resolve('app', 'assets', 'app')
  },

  output: {
    path: path.resolve('public', 'assets'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/assets/'
  },

  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {
      _svg: path.resolve('app', 'assets', 'svg'),
      _fonts: path.resolve('app', 'assets', 'fonts'),
      _js: path.resolve('app', 'assets', 'javascript'),
      _images: path.resolve('app', 'assets', 'images'),
      _stylesheets: path.resolve('app', 'assets', 'stylesheets')
    }
  },

  module: {
    rules: [
      isProduction() ? {} : require('./config/webpack/rules/jsPre')(),
      require('./config/webpack/rules/js')(),
      require('./config/webpack/rules/styl')(),
      require('./config/webpack/rules/css')(),
      require('./config/webpack/rules/pug')(),
    ]
  },

  plugins: [
    require('./config/webpack/plugins/extractPlugin')(),
    require('./config/webpack/plugins/assetsPlugin')(),
    require('./config/webpack/plugins/svgStore')(),
    require('./config/webpack/plugins/caseSensitivePathsPlugin')()
  ],

  optimization: {
    minimizer: [
      require('./config/webpack/plugins/terser')(),
      require('./config/webpack/plugins/optimizeCssAssets')()
    ],
    splitChunks: {
      name: 'vendors',
      chunks: 'all',
      cacheGroups: {
        vendors: {
          reuseExistingChunk: true,
          test: module => /node_modules/.test(module.resource) && !/.css/.test(module.resource)
        }
      }
    }
  },

  devServer: {
    contentBase: path.resolve('public'),
    compress: true,
    hot: false,
    inline: true,
    clientLogLevel: 'warn',
    port: 8080,
    proxy: {
      '*': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },

  devtool: isProduction() ? 'cheap-source-map' : 'cheap-module-source-map',
  bail: true,
  cache: true
};
