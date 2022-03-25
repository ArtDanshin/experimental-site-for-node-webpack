const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => new MiniCssExtractPlugin({ filename: '[name].[chunkhash:8].css' });
