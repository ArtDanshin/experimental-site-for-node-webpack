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
      ext: 'js json pug',
      ignore: [
        'app/assets/',
        'db/',
        'node_modules/'
      ]
    }
  }
};