/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minifyHTML = require('gulp-minify-html');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('minify-js', function () {
  gulp.src('temperature.js')
  .pipe(concat('minified_temperature.js'))
  .pipe(uglify())
  .pipe(gulp.dest('minify/js'))
});

gulp.task('minify-html', function() {
	gulp.src('index.html')
	.pipe(concat('minified_index.html'))
  	.pipe(minifyHTML())
  	.pipe(gulp.dest('minify/html'))
});

gulp.task('minify-tests', function() {
	gulp.src('tests/index.html')
	.pipe(concat('minified_tests.html'))
  	.pipe(minifyHTML())
  	.pipe(gulp.dest('minify/html'))
});
