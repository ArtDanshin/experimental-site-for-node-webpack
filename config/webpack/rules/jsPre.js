module.exports = function() {
  return {
    enforce: 'pre',
    test: /\.js$/,
    use: {
      loader: 'eslint-loader',
    },
    exclude: [/node_modules/]
  };
};
