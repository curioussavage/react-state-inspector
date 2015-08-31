
module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    browserNoActivityTimeout: 30000,
    captureTimeout: 30000,
    frameworks: [ 'mocha' ],
    reporters: [ 'dots' ],

    files: [
      'src/__tests__/index-test.js'
    ],

    plugins : [
        'karma-mocha',
        'karma-chrome-launcher'
    ]
  });
};
