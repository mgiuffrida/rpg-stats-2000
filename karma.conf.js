// Karma configuration
// Generated on Wed Jan 14 2015 21:48:38 GMT-0800 (Pacific Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // mocha setup
    client: {
      mocha: {
        ui: 'bdd',
        checkLeaks: true,
        globals: []
      },
      captureConsole: true
    },

    // list of files / patterns to load in the browser
    files: [
      // dependencies
      'test/karma-loader.html',
      'bower_components/chai/chai.js',
      {pattern: 'bower_components/**/*.{js,html,css,map}', included: false},
      'node_modules/mocha/mocha.js',
      // sources
      'bower_components/polymer/polymer.html',
      {pattern: 'model/*.html', included: false},
      {pattern: 'api/*.html', included: false},
      {pattern: 'ui/*.html', included: false},
      // tests
      'api/test/*.html',
      'ui/test/*.html'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9421,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher'
    ]
  });
};
