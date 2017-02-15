'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const config = require('../config').paths.pug;

gulp.task('views', function() {
  return gulp.src(config.entryPoints)
    .pipe(pug())
    .pipe(gulp.dest(config.destination))
});
