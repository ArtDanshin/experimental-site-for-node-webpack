'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config').paths.browserSync;

gulp.task('serve', function() {
  browserSync.init({
    port: 9000,
    server: {
      baseDir: config.baseDir
    }
  });

  browserSync.watch(config.baseDir).on('change', browserSync.reload);
});
