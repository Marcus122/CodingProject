var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.watch('./css/*.less', ['less', 'minify-css']);
    gulp.watch('./app/*.js', ['minify-js']);
});
gulp.task('less', function () {
    return gulp.src('./css/styles.less')
      .pipe(less())
      .pipe(gulp.dest('./css/'));
});
gulp.task('minify-css', function () {
    return gulp.src(['./css/*.css', '!./css/styles.min.css'])
	.pipe(concat('styles.min.css'))
	.pipe(minifyCss({ compatibility: 'ie8' }))
	.pipe(gulp.dest('./css/'));
});
gulp.task('minify-js', function () {
    return gulp.src(['./app/*.js', '!./app/scripts.min.js'])
	.pipe(concat('scripts.min.js'))
    .pipe(uglify())
	.pipe(gulp.dest('./app/'));
});