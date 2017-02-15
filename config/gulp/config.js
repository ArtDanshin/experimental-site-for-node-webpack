'use strict';

module.exports = {

  /* -----  paths ----- */
  paths: {
    pug : {
      location	: 'app/views/**/*.pug',
      compiled	: 'app/views/pages/*.pug',
      destination	: 'dist'
    },

    stylus : {
      entryPoints	: [
        'app/assets/stylesheets/application.styl'
      ],
      destination	: 'dist/assets/css/'
    },

    browserSync : {
      baseDir		: 'app',
      watchPaths 	: ['app/*.html', 'app/css/*.css', 'app/js/*.js']
    }
  }
};
