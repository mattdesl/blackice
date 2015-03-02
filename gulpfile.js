var gulp = require('gulp')
var gutil = require('gulp-util')
var source = require('vinyl-source-stream')
var watchify = require('watchify')
var livereload = require('gulp-livereload')
var connect = require('gulp-connect')
var browserify = require('browserify')
var xtend = require('xtend')
var concat = require('gulp-concat-sourcemap')
var uglify = require('gulp-uglifyjs')
var buffer = require('vinyl-buffer')

gulp.task('bundle', createBundler(true))
gulp.task('bundle-dist', createBundler(false))


function createBundler(debug) {
    return function() {
        var args = xtend(watchify.args, { debug: true })
        var b = debug ? watchify(browserify(args)) : browserify({ standalone: 'blackice' })
        if (debug)
            b.on('update', bundle)
        b.add(debug ? './test.js' : './index.js')
     
        function bundle() {
            var p = b.bundle()
                .on('error', function(e) {
                    gutil.beep()
                    gutil.log( gutil.colors.red('Bundle error: ',e.message) )
                })
                .pipe(source(debug ? 'bundle.js' : 'blackice.js'))
            if (debug) {
                p = p.pipe(livereload())
            }
            else {
                p = p.pipe(buffer())
                     // .pipe(uglify())
            }
            return p.pipe(gulp.dest(debug ? 'js/' : 'build/'))
        }
        return bundle()
    }
}

gulp.task('dist', ['bundle-dist'], function() {
    return gulp.src([
        'js/libs.js',
        'js/Mirror.js',
        'js/WaterShader.js',
        // 'js/OBJLoader.js',
        // 'js/MTLLoader.js',
        'js/OBJMTLLoader.js'
    ]).pipe(concat('three-libs.js', { newLine: ';' }))
      .pipe(gulp.dest('./build'))
})
 
gulp.task('watch', ['bundle'], function(){
    connect.server({
        port: 8000,
    })
    livereload.listen(35729)
});

var libs = [
    'node_modules/gsap/src/uncompressed/TweenMax.js',
    'node_modules/three/build/three.js'
]
gulp.task('libs', function() {
    return gulp.src(libs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./js'))
})