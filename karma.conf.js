module.exports = function (config) {
  config.set({
    basePath: './',
    files: [
      'dist/js/vendors.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      // fixtures
      {pattern: 'app/**/**/**/*.json', included: false}
    ],
    exclude: [],
    preprocessors: {
     // 'app/**/**/**/*.json'   : ['json_fixtures'],
      'fixtures/*.json': ['json_fixtures']
    },
    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },
    proxies: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-fixture'
    ],
    captureTimeout: 60000,
    singleRun: false
  });
};
