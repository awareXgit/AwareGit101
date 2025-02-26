const { test, expect } = require('@playwright/test');
const { login } = require('./login');

test('should log in successfully with correct credentials', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');  // ส่งค่าพารามิเตอร์ username และ password
});
