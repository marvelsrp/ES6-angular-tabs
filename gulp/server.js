/** express server & lr & watch **/
var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');
var underscore = require('underscore');
var configManager = require('./configurationManager');
var config = require('./configurationManager').get();

var srcDir = config.srcDir;
var destPathName = config.destPathName;
var util = require('gulp-util');

var tinylr;

var expressSrc = path.join(__dirname, '../dist'),
  port = config.servePort,
  urlPort = config.urlPort || port,
  lrPort = config.liveReloadPort;

gulp.task('express', function (cb) {
  var express = require('express');
  var app = express();
  console.log(('start express in ' + expressSrc).green);
  app.use(require('connect-livereload')({port: lrPort}));
  app.use(express.static(expressSrc, {
    setHeaders: function (res, path, stat) {
      res.set('cache-control', "no-cache")
    }
  }));
  app.listen(port);
  cb();
});

gulp.task('livereload', function (cb) {
  tinylr = require('tiny-lr')();
  tinylr.listen(lrPort);
  cb();
});

gulp.task('open', function (cb) {
  var url = config.url + ':' + urlPort + '/';
  console.log(('Open ' + url).green);
  require('opn')(url);
  cb();
});

function notifyLiveReload(event) {
  console.log(('NotifyLiveReload').yellow);

  var fileName = require('path').relative(__dirname, event.path);
  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

function debounce(fn, timeout, immediately, context) {
  var t;
  return function () {
    var cntx = context || this;
    var args = arguments;
    if (t) {
      clearTimeout(t);
      t == null;
    }
    if (!t) {
      t = setTimeout(function () {
        fn.apply(cntx, args);
        t = null;
      }, timeout);
    }
  };
}

gulp.task('watch', function (cb) {
  if (config.watch) {
    var debounceDelay = 1000;
    var gulpWatchOptions = {debounceDelay: debounceDelay};
    var commonSource = config.commonSource;

    var startTasks = function startTasks(tasks) {
      return function (e) {
        console.log(('Watch file: ' + e.path).yellow);
        this.start(tasks);
      }.bind(this);
    }.bind(this);

    console.log('Start watching angular templates');
    gulp.watch([srcDir + '/**/*.html'], gulpWatchOptions, startTasks('templateCache'));

    console.log('Start watching styles');
    gulp.watch([srcDir + '/**/*.scss'], gulpWatchOptions, startTasks('scss'));


    if (config.livereload) {
      var callNotifyLiveReload = underscore.debounce(function (event) {
        notifyLiveReload(event);
      }, 1000);
      gulp.watch([destPathName + '/**/*.js', destPathName + '/**/*.css', destPathName + '/**/*.html'], gulpWatchOptions, callNotifyLiveReload);
    }
  }

  cb();
});


/**
 * Запуск сервера
 */
gulp.task('serve', function (done) {
  configManager.set({
    watch: true,
    livereload: true
  });
  runSequence('build', 'express', 'livereload', 'watch', 'open', done);
});

/**********************/