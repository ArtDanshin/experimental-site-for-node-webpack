'use strict';

module.exports = {

  /* -----  paths ----- */
  paths: {
    pug : {
      entryPoints	: 'app/views/pages/*.pug',
      location	: 'app/views/**/*.pug',
      destination	: 'dist'
    },

    stylus : {
      entryPoints	: [
        'app/assets/stylesheets/application.styl'
      ],
      location  : 'app/assets/stylesheets/**/*.styl',
      destination	: 'dist/assets/css/'
    },

    browserSync : {
      baseDir		: 'app',
      watchPaths 	: ['app/*.html', 'app/css/*.css', 'app/js/*.js']
    }
  }
};
