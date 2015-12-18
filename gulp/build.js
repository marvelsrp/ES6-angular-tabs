/**
 * Created by RobertSabiryanov on 13.07.15.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var templateCache = require('gulp-angular-templatecache');
var config = require('./configurationManager').get();
var del = require('del');
var uglify = require('gulp-uglifyjs');

/** Config variables **/
var path = require('path'),
    destPathName = config.destPathName,
    tmpPathName = config.tmp,
    destDir = './' + destPathName,
    appDir = config.appDir,
    bowerDir = appDir + '/bower_components';

gulp.task('clean', del.bind(null, [destDir], {force: true}));

gulp.task('img', function () {
    return gulp.src([appDir + '/img/**/*.*'])
        .pipe(gulp.dest(destDir + '/img/'))
});
gulp.task('css', function () {
    return gulp.src([appDir + '/css/site.css'])
        .pipe(gulp.dest(destDir+ '/css'))
});
gulp.task('html', function () {
    return gulp.src([appDir + '/index.html'])
        .pipe(gulp.dest(destDir))
});

gulp.task('templateCache', function () {
    return gulp.src(appDir + '/js/**/*.html')
        .pipe(templateCache('templates.js', {
            module: 'main.templates'
        }))
        .pipe(gulp.dest(tmpPathName + '/js'));
});
gulp.task('bower_components', function () {
    return gulp.src([appDir + '/bower_components/**/*.*'])
        .pipe(gulp.dest(destDir + '/bower_components/'))
});

gulp.task('build-js', ['templateCache', 'build-es6'], function () {
    console.log(tmpPathName+'/*.js');
    return gulp.src(tmpPathName + '/js/*.js')
        .pipe(uglify('fTab.js', {
            output: {
                beautify: true
            }
        }))
        .pipe(gulp.dest(destDir + '/js/'));
});
gulp.task('build-uglify-js', ['build-js'], function () {
    console.log(tmpPathName+'/*.js');
    return gulp.src(destDir + '/js/*.js')
      .pipe(uglify('fTab.min.js', {
          mangle: false,
          outSourceMap: true
      }))
      .pipe(gulp.dest(destDir + '/js/'));
});
gulp.task('build-es6', function () {
    config.entryPoint = appDir + '/js/module.js';
    config.bundleName = 'module.js';
    config.bundleNameMin = 'module.min.js';
    config.destPathName = tmpPathName + '/js';
    return bundler(config);
});

var bundler = require('./es6bundler');

gulp.task('build', function (cb) {
    runSequence(['img', 'css', 'html','bower_components', 'build-uglify-js'], 'injects', cb);
});
