'use strict';

const gulp    = require('gulp');
const nodemon = require('gulp-nodemon');

require('./lint');

gulp.task('watch', done => {
  nodemon({
    script: 'app.js',
    ext: 'js json pug',
    ignore: [
      'app/assets/',
      'db/',
      'node_modules/'
    ],
    tasks: ['lint']
  });

  done();
});
