var gulp = require('gulp');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var debug = require('gulp-debug');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var gls = require('gulp-live-server');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');

var path = {
  HTML: 'src/index.html',
  SRC_NODE_MODULES: 'src/node_modules/*',
  DEST_NODE_MODULES: 'node_modules',
  CSS: ['src/css/*.css', 'src/css/**/*.css'],
  FONTS: ['src/fonts/*.*', 'src/fonts/**/*.*'],
  OUT: 'build.js',
  MINIFIED_OUT: 'build.min.js',
  DEST: 'public',
  DEST_SRC_JS: 'public/js',
  DEST_SRC_CSS: 'public/css',
  DEST_SRC_FONTS: 'public/fonts',
  ENTRY_POINT: './src/js/main.jsx',
  LIVE_RELOAD_WATCH: ['public/*','public/**/*'],
  SERVER: './index.js'
};

//--------------------------------------------------DEV-------------------//
gulp.task('copyAndReplace', function(){
  gulp.src(path.SRC_NODE_MODULES)
    .pipe(debug())
    .pipe(gulp.dest(path.DEST_NODE_MODULES));
  gulp.src(path.CSS)
    .pipe(debug())
    .pipe(gulp.dest(path.DEST_SRC_CSS));
  gulp.src(path.FONTS)
    .pipe(debug())
    .pipe(gulp.dest(path.DEST_SRC_FONTS));
  gulp.src(path.HTML)
    .pipe(debug())
    .pipe(htmlreplace({
      'js': 'js/' + path.OUT,
      'live': '<script src="http://127.0.0.1:35729/livereload.js"></script>'
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', ['copyAndReplace'],function() {
  gulp.watch(path.HTML, ['copyAndReplace']);
  gulp.watch(path.CSS, ['copyAndReplace']);
  gulp.watch(path.FONTS, ['copyAndReplace']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .on('error',function(e){console.log('Browserify Error');console.log(e);})
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC_JS));
      console.log('Updated '+path.DEST_SRC_JS);
  })
    .bundle()
    .on('error',function(e){console.log('Browserify Error');console.log(e);})
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC_JS));
});

gulp.task('serve', function() {
  var server = gls.new(path.SERVER);
  server.start();
  gulp.watch(path.LIVE_RELOAD_WATCH, function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('default', ['watch','serve']);
//------------------------------------------------------------------------//

//--------------------------------------------------PROD------------------//
gulp.task('copyAndReplaceProd', function(){
  gulp.src(path.SRC_NODE_MODULES)
    .pipe(debug())
    .pipe(gulp.dest(path.DEST_NODE_MODULES));
  gulp.src(path.CSS)
    .pipe(debug())
    .pipe(gulp.dest(path.DEST_SRC_CSS));
  gulp.src(path.FONTS)
    .pipe(debug())
    .pipe(gulp.dest(path.DEST_SRC_FONTS));
  gulp.src(path.HTML)
    .pipe(debug())
    .pipe(htmlreplace({
      'js': 'js/' + path.MINIFIED_OUT,
      'live': ''
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('build',['copyAndReplaceProd'], function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  })
    .bundle()
    .on('error',function(e){console.log('Browserify Error');console.log(e);})
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))//gzip(
    .pipe(gulp.dest(path.DEST_SRC_JS));
});

gulp.task('daemon', function () {
  nodemon({
    script: path.SERVER
  }).on('error', function(e) {console.log("ERROR:");console.log(e);});
})

gulp.task('prod', ['build','daemon']);
//------------------------------------------------------------------------//
