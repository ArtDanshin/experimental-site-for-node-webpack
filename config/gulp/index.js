'use strict';

const requireDir = require('require-dir');
const gulp = require('gulp');

requireDir('./tasks');

gulp.task('build', gulp.parallel('views', 'styles'));

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));

gulp.task('default', gulp.series('build'));