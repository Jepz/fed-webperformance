var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    htmlmin = require('gulp-htmlmin'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// HTML
gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: 'HTML task complete' }))
});

gulp.task('htmlViews', function() {
    return gulp.src('app/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist/views'))
    .pipe(notify({ message: 'HTML-Views task complete' }))
});


// Styles
gulp.task('styles', function() {
  return gulp.src('app/styles/*.css', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('app/scripts/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    //.pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('app/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});


// Clean
gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/images', 'dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images', 'html','htmlViews');
});

// Watch
gulp.task('watch', function() {

    // Watch .html files
    gulp.watch('app/*.html', ['html']); 
    gulp.watch('app/views/*.html', ['htmlViews']); 

  // Watch .css files
  gulp.watch('app/styles/*.css', ['styles']);

  // Watch .js files
  gulp.watch('app/scripts/*.js', ['scripts']);

  // Watch image files
  gulp.watch('app/images/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['app/**']).on('change', livereload.changed);

});