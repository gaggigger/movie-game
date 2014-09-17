var gulp         = require('gulp'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    ngAnnotate   = require('gulp-ng-annotate'),
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  return gulp.src(
      /**
      * Gather vendor files,
      * then main angular app declaration,
      * then all angular modules
      */
      [
        'dev/js/vendor/**/*.js',
        'dev/js/**/app.js',
        'dev/js/**/*.js'
      ],
      {base: 'dev/js'}
    )
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/js'))
});
