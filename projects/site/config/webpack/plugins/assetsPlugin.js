const path         = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = () => new AssetsPlugin({
  path: path.resolve('config'),
  filename: 'manifest.json',
  prettyPrint: true
});
