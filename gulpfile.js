var gulp = require('gulp')
var gutil = require('gulp-util')
var source = require('vinyl-source-stream')
var watchify = require('watchify')
var livereload = require('gulp-livereload')
var connect = require('gulp-connect')
var browserify = require('browserify')
var xtend = require('xtend')
 
gulp.task('bundle', function(){
    var args = xtend(watchify.args, { debug: true })
    var b = watchify(browserify(args))
    b.on('update', bundle)
    b.add('./index.js')
 
    function bundle() {
        return b.bundle()
            .on('error', function(e) {
                gutil.beep()
                gutil.log( gutil.colors.red('Bundle error: ',e.message) )
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('js/'))
            .pipe(livereload())
    }
    return bundle()
})
 
gulp.task('watch', ['bundle'], function(){
    connect.server({
        port: 8000,
    })
    livereload.listen(35729)
});