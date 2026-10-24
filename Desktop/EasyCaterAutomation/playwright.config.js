const { defineConfig, devices } = require('@playwright/test');
const env = require('./config/env');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,          // order flow is stateful (cart)
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: env.baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    geolocation: { latitude: 22.3072, longitude: 73.1812 }, // Vadodara
    permissions: ['geolocation'],
    locale: 'en-IN',
    timezoneId: 'Asia/Kolkata',
  },
  projects: [
    { name: 'setup', testMatch: /auth\.setup\.js/ },
    { name: 'guest', testMatch: /(01|03)-.*\.spec\.js/, use: { ...devices['Desktop Chrome'] } },
    {
      name: 'logged-in',
      testMatch: /(02|04|05|06)-.*\.spec\.js/,
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'], storageState: env.authFile },
    },
    { name: 'mobile', testMatch: /01-.*\.spec\.js/, use: { ...devices['Pixel 7'] } },
  ],
});