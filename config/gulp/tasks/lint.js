'use strict';

const gulp    = require('gulp');
const eslint = require('gulp-eslint');
const config = require('../config').paths.eslint;

gulp.task('lint', () => {
  return gulp.src(config.checkPath.concat(config.ignorePath))
    .pipe(eslint())
    .pipe(eslint.format())
});