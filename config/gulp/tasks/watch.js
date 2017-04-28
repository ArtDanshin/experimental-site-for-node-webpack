'use strict';

const gulp    = require('gulp');
const nodemon = require('gulp-nodemon');
const config = require('../config').paths.nodemon;

require('./lint');

gulp.task('watch', done => {
  const stream = nodemon({
    script: config.entry,
    ext: 'jade js',
    tasks: ['lint']
  });

  done();
});