module.exports = {
  projects: [
    {
      displayName: 'jsdom-tests',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/js/__tests__/card.test.js', '<rootDir>/src/js/__tests__/input_form.test.js'],
    },
    {
      displayName: 'puppeteer-tests',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/e2e/message.test.js'],
    },
  ],
  testTimeout: 20000,
};
