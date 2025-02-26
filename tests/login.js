const { expect } = require('@playwright/test');

async function login(page, standard_user, secret_sauce) {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(standard_user);  // ใช้พารามิเตอร์ที่รับเข้ามา
    await page.locator('#password').fill(secret_sauce);  // ใช้พารามิเตอร์ที่รับเข้ามา
    await page.locator('#login-button').click(); 
    await expect(page.locator('.inventory_list')).toBeVisible(); // เช็คว่า inventory list ปรากฏ
}

module.exports = { login };
