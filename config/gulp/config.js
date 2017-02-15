'use strict';

const _root = global._settings.rootFolder;


module.exports = {

  /* -----  paths ----- */
  paths: {
    pug : {
      location	: 'app/views/**/*.pug',
      compiled	: 'app/views/pages/*.pug',
      destination	: 'dist'
    },

    stylus : {
      location	: 'app/scss/**/*scss',
      entryPoint	: 'app/css/main.css',
    },

    browserSync : {
      baseDir		: 'app',
      watchPaths 	: ['app/*.html', 'app/css/*.css', 'app/js/*.js']
    }
  }
};
