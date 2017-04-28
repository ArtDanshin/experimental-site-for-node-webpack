'use strict';

module.exports = {

  /* -----  paths ----- */
  paths: {
    eslint: {
      checkPath	  : ['app/**/*.js'],
      ignorePath	: ['!app/assets/**'],
    },

    nodemon: {
      entry: 'app.js',
      ext: 'js json jade',
      ignore: [
        'app/assets/',
        'config/',
        'db/',
        'node_modules/'
      ]
    }
  }
};