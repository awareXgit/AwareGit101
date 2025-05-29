// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    // รันใน Google Chrome จริง
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',   // ต้องเป็น 'chromium'
        channel: 'chrome',         // ใช้ Google Chrome จริง
        headless: false,           // แสดง GUI (optional)
      },
    },

    // รันใน Microsoft Edge จริง (ถ้าอยากรันด้วย)
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        browserName: 'chromium',
        channel: 'msedge',         // ใช้ Microsoft Edge จริง
        headless: false,
      },
    },

    // Firefox และ Safari (เดิม)
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
