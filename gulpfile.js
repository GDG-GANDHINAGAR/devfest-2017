var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var beeper = require('beeper');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

//import required dependencies

//concatenate js files


var onError = function(err) {
    notify.onError({
        title: "Gulp error in " + err.plugin,
        message: err.toString()
    })(err);
    beeper(3);
    this.emit('end');
    gutil.log(gutil.colors.red(err));
};
//this block will give error in red fonts instade of stopping on error

gulp.task('styles', function() {
    gulp.src('assets/sass/style.sass')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(sass({ indentedSyntax: true }))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/css'));
});
//styles task to compile sass and build sass sourcemaps


gulp.task('default', function() {
    gulp.start('styles', 'watch');
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*', ['styles']);
    gulp.watch('assets/js/*.js', browserSync.reload);
    gulp.watch('assets/img/*.*', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);

    // init server
    browserSync.init({
        server: {
            proxy: "local.build",
            baseDir: "./"
        }
    });

});