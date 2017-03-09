/**
 * Created by kensuka on 3/8/17.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect');
var uglify = require("gulp-uglify");

gulp.task('connect', ['build'], function() {
    connect.server({
        root: 'landing',
        livereload: true,
        port:3000,
        middleware: function(connect) {
            return [connect().use('/landing', connect.static('landing'))];
        }
    });
});


gulp.task('scripts', function(){
    return gulp.src(['./public/**/*.js'])
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('landing'))
});

gulp.task('html', function(){
    return gulp.src(['./public/**/*.html'])
        .pipe(gulp.dest('dist'))
});

gulp.task('css', function(){
    return gulp.src(['./public/**/*.css'])
        .pipe(gulp.dest('landing'))
});


gulp.task('images', function(){
    return gulp.src(['./public/**/*.jpg', './public/**/*.png'])
        .pipe(gulp.dest('landing'))
});

gulp.task('fonts', function(){
    return gulp.src(['./public/**/*.ttf'])
        .pipe(gulp.dest('landing'))
});

gulp.task('build', ['scripts', 'html', 'css', 'images', 'fonts', 'watch']);

gulp.task('watch', function () {
    gulp.watch(['./public/**/*.js'], ['scripts']);
});