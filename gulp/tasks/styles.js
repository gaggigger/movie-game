var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
  return gulp.src('dev/scss/main.scss')
    .pipe(sass({
      css: 'app/assets/css',
      sass: 'dev/scss',
      image: 'app/assets/images'
    })).on('error', function(err) {
      displayError(err);
    })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .on('error', handleErrors)
    .pipe(gulp.dest('app/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('app/assets/css'));
});
