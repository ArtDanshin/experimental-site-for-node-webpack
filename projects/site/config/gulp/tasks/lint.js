'use strict';

const gulp   = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src(['app/**/*.js', '!app/assets/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});
