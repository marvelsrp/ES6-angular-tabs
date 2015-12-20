module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      'dist/bower_components/angular/angular.min.js',
      "dist/bower_components/angular-mocks/angular-mocks.js",
      'dist/js/bundle.min.js',
      'dist/js/templates.js',
      'src/**/*.spec.js',
      // fixtures
      {pattern: 'dist/mock/**/*.json', included: false}
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    //babelPreprocessor: {
    //  options: {
    //    presets: ['es2015'],
    //    sourceMap: 'inline'
    //  }
    //},
    proxies: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-browserify',
      'karma-babel-preprocessor'
    ],
    captureTimeout: 60000,
    singleRun: false
  });
};
