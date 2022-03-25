module.exports = function() {
  return {
    test: /\.pug$/,
    use: {
      loader: 'pug-loader',
      options: {
        pretty: true
      }
    }
  };
};
