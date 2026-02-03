/*
    Jest configuration file
    This setup enables unit testing of pure JavaScript logic
    without relying on browser-specific APIs.
*/
module.exports = {
  /*
      Uses a Node environment so tests can run without a DOM.
      This matches the separation of logic and presentation
      used in the game code.
  */
  testEnvironment: 'node',

  /*
      Enables test coverage reporting to help identify
      which parts of the game logic are exercised by tests.
  */
  collectCoverage: true,

  /*
      Output directory for coverage reports.
      This is excluded from version control.
  */
  coverageDirectory: 'coverage',

  /*
      Limits Jest to test files inside the js directory,
      preventing accidental execution of non-test files.
  */
  testMatch: ['**/js/**/*.test.js'],

  /*
      Provides detailed output for each test run,
      making failures easier to diagnose.
  */
  verbose: true
};
