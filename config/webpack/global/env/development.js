'use strict';

module.exports = function(_path) {
  return {
    context: _path,
    devtool: 'inline-source-map',
    output: { publicPath: '/' },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          use: {
            loader: 'eslint-loader'
          },
          exclude: [/node_modules/, /app\/assets\/javascripts\/vendors/]
        },
        {
          test: /\.styl$/,
          enforce: 'pre',
          use: 'stylint-loader'
        }
      ]
    },
    devServer: {
      hot: false,
      inline: true,
      port: 8080,
      proxy: {
        '**': 'http://localhost:3000'
      }
    }
  };
};