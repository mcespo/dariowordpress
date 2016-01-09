// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('library/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('library/css'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('library/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);