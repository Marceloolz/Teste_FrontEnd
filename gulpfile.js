var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch',['sass'], function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});
// gulp.watch('./*.html', ['htmlmin']);

gulp.task('sass', function(){
	gulp.src('./assets/sass/app.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('./dist/css/style.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./dist/css/'));
});