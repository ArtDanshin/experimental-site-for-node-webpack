'use strict';

/**
 * Development config
 * @param  {String} _path Absolute path to application
 * @return {Object}       Object of development settings
 */
module.exports = function(_path) {
  return {
    context: _path,
    devtool: 'eval',
    devServer: {
      hot: false,
      inline: true,
      port: 8080,
      proxy: {
        '**': 'http://localhost:3000'
      }
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          enforce: 'pre',
          use: 'stylint-loader'
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: 'eslint-loader'
        }
      ]
    }
  };
};
