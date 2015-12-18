

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var config = require('./configurationManager').get();
var del = require('del');
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var bundler = require('./es6bundler');
/** Config variables **/
var path = require('path'),
  destPathName = config.destPathName,
  tmpPathName = config.tmp,
  destDir = './' + destPathName,
  srcDir = config.srcDir;

gulp.task('clean', del.bind(null, [destDir], {force: true}));

gulp.task('scss', function () {

  return gulp.src(srcDir + '/scss/fTabs.scss')
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(destDir + '/css', {overwrite: true}));
});

gulp.task('templateCache', function () {
  return gulp.src(srcDir + '/js/**/*.html')
    .pipe(templateCache('templates.js', {
      module: 'main.templates'
    }))
    .pipe(gulp.dest(tmpPathName + '/js'));
});
gulp.task('bower_components', function () {
  return gulp.src([srcDir + '/bower_components/**/*.*'])
    .pipe(gulp.dest(destDir + '/bower_components/'))
});

gulp.task('build-js', ['templateCache', 'build-es6'], function () {
  console.log(tmpPathName + '/*.js');
  return gulp.src(tmpPathName + '/js/*.js')
    .pipe(uglify('fTabs.js', {
      output: {
        beautify: true
      }
    }))
    .pipe(gulp.dest(destDir + '/js/'));
});
gulp.task('build-uglify-js', ['build-js'], function () {
  console.log(tmpPathName + '/*.js');
  return gulp.src(destDir + '/js/*.js')
    .pipe(uglify('fTabs.min.js', {
      mangle: false,
      outSourceMap: true
    }))
    .pipe(gulp.dest(destDir + '/js/'));
});
gulp.task('build-es6', function () {
  config.entryPoint = srcDir + '/js/module.js';
  config.bundleName = 'module.js';
  config.bundleNameMin = 'module.min.js';
  config.destPathName = tmpPathName + '/js';
  return bundler(config);
});



gulp.task('build', ['scss', 'bower_components', 'build-uglify-js']);
