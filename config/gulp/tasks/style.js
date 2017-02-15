'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const config = require('../config').paths.stylus;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV !== 'production';

gulp.task('styles', function () {
  return gulp.src(config.entryPoints)
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(stylus())
    .pipe(gulpIf(isDevelopment, sourcemaps.write('.')))
    .pipe(gulp.dest(config.destination))
});
