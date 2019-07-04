var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
	gulp.src('./assets/sass/app.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('./style.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./dist/css/'));
});