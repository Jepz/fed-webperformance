var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    csso = require('gulp-csso'),
    htmlmin = require('gulp-htmlmin'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// HTML
gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true,removeComments: true, preserveLineBreaks: true, minifyCSS: true}))
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: 'HTML task complete' }))
});

gulp.task('htmlViews', function() {
    return gulp.src('app/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, preserveLineBreaks: true, minifyCSS: true}))
    .pipe(gulp.dest('dist/views'))
    .pipe(notify({ message: 'HTML-Views task complete' }))
});


// Styles
gulp.task('styles', function() {
  return gulp.src('app/css/*.css', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(csso({compress: true}))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});
gulp.task('stylesViews', function() {
  return gulp.src('app/views/css/*.css', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(cleanCSS({keepSpecialComments: 0}))
    .pipe(csso({compress: true}))
    .pipe(gulp.dest('dist/views/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(uglify({compress: true}))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
gulp.task('scriptsViews', function() {
  return gulp.src('app/views/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(uglify({compress: true}))
    .pipe(gulp.dest('dist/views/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('app/img/*')
    .pipe(cache(imagemin({ interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});
gulp.task('imagesViews', function() {
  return gulp.src('app/views/images/*')
    .pipe(cache(imagemin({ interlaced: true })))
    .pipe(gulp.dest('dist/views/images'))
    .pipe(notify({ message: 'Images task complete' }));
});


// Clean
gulp.task('clean', function() {
  return del(['dist/css','dist/views/css', 'dist/js','dist/views/js', 'dist/img','dist/views/img', 'dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'stylesViews','scripts', 'scriptsViews','images', 'imagesViews','html','htmlViews');
});

// Watch
gulp.task('watch', function() {

    // Watch .html files
    gulp.watch('app/*.html', ['html']); 
    gulp.watch('app/views/*.html', ['htmlViews']); 

  // Watch .css files
  gulp.watch('app/css/*.css', ['styles']);
  gulp.watch('app/views/css/*.css', ['stylesViews']);

  // Watch .js files
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/views/js/*.js', ['scriptsViews']);

  // Watch image files
  gulp.watch('app/img/*', ['images']);
  gulp.watch('app/views/images/*', ['imagesViews']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['app/**']).on('change', livereload.changed);

});