'use strict';

const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(_path) {
  return {
    context: _path,
    devtool: 'cheap-source-map',
    bail: true,
    plugins: [
      // apply compression for assets
      new CompressionPlugin({
        algorithm: 'gzip',
        regExp: /\.js$|\.css$/,
        threshold: 0,
        minRatio: 0.8
      }),

      new UglifyJSPlugin({
        sourceMap: false
      })
    ]
  };
};