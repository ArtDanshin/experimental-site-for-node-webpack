const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function() {
  return new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.js$|\.css$/,
    threshold: 0,
    minRatio: 0.8
  });
};
