const { test, expect } = require('@playwright/test');
const { login } = require('./login'); // ใช้ require() เพื่อนำเข้า login ฟังก์ชัน

test('should log in successfully with correct credentials', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');  // ส่งค่าพารามิเตอร์ username และ password
    // เพิ่มการตรวจสอบอื่น ๆ ตามที่ต้องการ
});
