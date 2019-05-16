module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>tests/setupEnzyme.js',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
};
