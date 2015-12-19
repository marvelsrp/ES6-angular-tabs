var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var config = require('./configurationManager').get();
var del = require('del');
var sass = require('gulp-sass');
var bundler = require('./es6bundler');
var runSequence = require('run-sequence');
/** Config variables **/
var path = require('path'),
  destPathName = config.destPathName,
  destDir = './' + destPathName,
  srcDir = config.srcDir;

gulp.task('clean', del.bind(null, [destDir], {force: true}));

gulp.task('scss', function () {

  return gulp.src(srcDir + '/app.scss')
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(destDir + '/css', {overwrite: true}));
});
gulp.task('html', function () {
  return gulp.src([srcDir + '/index.html'])
    .pipe(gulp.dest(destDir));
});
gulp.task('mock', function () {
  return gulp.src([srcDir + '/**/*.json'])
    .pipe(gulp.dest(destDir + '/mock'));
});

gulp.task('templateCache', function () {
  return gulp.src(srcDir + '/**/*.html')
    .pipe(templateCache('templates.js', {
      module: 'app.templates'
    }))
    .pipe(gulp.dest(destDir + '/js'));
});
gulp.task('bower_components', function () {
  return gulp.src([srcDir + '/bower_components/**/*.*'])
    .pipe(gulp.dest(destDir + '/bower_components/'));
});

gulp.task('build-es6', function () {
  config.entryPoint = srcDir + '/app.js';
  config.bundleName = 'bundle.js';
  config.bundleNameMin = 'bundle.min.js';
  config.destPathName = destDir + '/js';
  config.minify = true;
  //config.debug = true;
  return bundler(config);
});

gulp.task('build', function (cb) {
  runSequence(['scss', 'html', 'mock', 'bower_components', 'build-es6', 'templateCache'], 'injects', cb);
});
