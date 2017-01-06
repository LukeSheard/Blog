const css  = require('gulp-clean-css')
const gulp = require('gulp');
const sass = require('gulp-sass');
const srcm = require('gulp-sourcemaps');

gulp.task('default', [ 'build', 'watch' ]);
gulp.task('build', [ 'sass', 'assets' ]);
gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', [ 'sass'   ]);
  gulp.watch('./src/**/*.html', [ 'assets' ]);
});

gulp.task('assets', function() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  return gulp.src('./src/style/index.scss')
    .pipe(srcm.init())
    .pipe(sass())
    .pipe(css({
      compatibility: 'ie8'
    }))
    .pipe(srcm.write())
    .pipe(gulp.dest('./public/css'));
});