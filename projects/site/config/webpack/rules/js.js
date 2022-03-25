const path = require('path');

module.exports = function() {
  return {
    test: /\.js$/,
    include: [
      path.resolve('app', 'assets', 'javascripts'),
    ],
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env']],
        plugins: [
          // '@babel/plugin-proposal-class-properties',
          // '@babel/plugin-proposal-object-rest-spread'
        ],
        cacheDirectory: path.resolve('tmp', 'babel-cache')
      }
    }
  };
};
