const { expect } = require('@playwright/test');

async function login(page, username, password) {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);  // ใช้พารามิเตอร์ที่รับเข้ามา
    await page.locator('#password').fill(password);  // ใช้พารามิเตอร์ที่รับเข้ามา
    await page.locator('#login-button').click(); 
    await expect(page.locator('.inventory_list')).toBeVisible(); // เช็คว่า inventory list ปรากฏ
}

module.exports = { login };
