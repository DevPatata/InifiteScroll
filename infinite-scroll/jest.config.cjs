module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|webp)$': '<rootDir>/tests/mocks/styleMock',
  }
}

