'use strict';

const gulp = require('gulp');
const config = require('../config').paths;

gulp.task('watch', function () {
  gulp.watch(config.pug.location, ['views']);
  gulp.watch(config.stylus.location, ['styles']);
});
