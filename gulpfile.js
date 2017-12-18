var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


gulp.task('watch', function() {
    gulp.watch('*.js', ['js']);
    gulp.watch('*html', ['js']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('styles/main.scss', ['sass']);
  });

  gulp.task('default', ['watch']);
  