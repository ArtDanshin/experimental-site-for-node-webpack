'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const config = require('../config').paths.pug;

gulp.task('views', function() {
  return gulp.src(config.compiled)
    .pipe(pug())
    .pipe(gulp.dest(config.destination))
});
