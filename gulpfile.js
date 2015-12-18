
var gulp = require('gulp');
var colors = require('colors');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    runSequence('build');
});