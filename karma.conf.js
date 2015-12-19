module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'dist/bower_components/angular/angular.min.js',
      'dist/js/bundle.min.js',
      'dist/js/templates.js',
      'src/**/.spec.js',
      // fixtures
      {pattern: 'dist/mock/**/*.json', included: false}
    ],
    exclude: [],
    preprocessors: {
     // 'app/**/**/**/*.json'   : ['json_fixtures'],
     // 'fixtures/*.json': ['json_fixtures']
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
      'karma-jasmine'
    ],
    captureTimeout: 60000,
    singleRun: false
  });
};
