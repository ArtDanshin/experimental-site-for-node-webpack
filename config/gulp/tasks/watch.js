'use strict';

const gulp = require('gulp');
const config = require('../config').paths;

gulp.task('watch', function () {
  gulp.watch(config.pug.location, gulp.series('views'));
  gulp.watch(config.stylus.location, gulp.series('styles'));
});
