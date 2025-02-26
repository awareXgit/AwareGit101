const { test, expect } = require('@playwright/test');
const { login } = require('./login');

test('CheckOut single Product', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');  // ส่งค่าพารามิเตอร์ username และ password
    const AddProductbtn = page.locator('.btn.btn_primary.btn_small.btn_inventory');
    await AddProductbtn.nth(2).click();
    const RemoveProductbtn = page.locator('.btn.btn_secondary.btn_small.btn_inventory');
    await expect(RemoveProductbtn).toHaveText('Remove');
    await RemoveProductbtn.nth(0).click();
    await AddProductbtn.nth(0).click();
    const CartBadge = page.locator('.shopping_cart_badge');
    await expect(CartBadge).toHaveCount(1);
    await page.locator('#shopping_cart_container').click(); 
});
