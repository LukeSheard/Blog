const css        = require('gulp-clean-css')
const gulp       = require('gulp');
const sass       = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', [ 'build', 'watch' ]);
gulp.task('build', [ 'sass', 'assets' ]);
gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', [ 'sass'   ]);
  gulp.watch([
    './src/**/*',
    '!./src/style',
    '!./src/style/**/*'
  ], [ 'assets' ]);
});

gulp.task('assets', function() {
  return gulp.src([
    './src/**/*',
    '!./src/style',
    '!./src/style/**/*'
  ]).pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  return gulp.src('./src/style/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(css({
      compatibility: 'ie8'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'));
});
