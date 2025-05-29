const { expect } = require('@playwright/test');

async function login(page, username, password) {
    await page.goto('https://cms-uat-sg.essosmilesapp.com/')
    await expect(page.locator('#username')).toBeVisible();
    await page.locator('#username').fill('jiraporn');
    await expect(page.locator('#password_input')).toBeVisible();
    await page.locator('#password_input').fill('Tarn1313');
    await expect(page.locator('text=Login')).toBeVisible();
    await page.locator('text=Login').click();
}

module.exports = { login };
