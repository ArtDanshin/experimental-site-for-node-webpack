'use strict';

module.exports = {

  /* -----  paths ----- */
  paths: {
    eslint : {
      checkPath	  : ['app/**/*.js'],
      ignorePath	: ['!app/assets/**'],
    },

    nodemon : {
      entry: 'app.js'
    }
  }
};