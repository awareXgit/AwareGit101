// @ts-check
const { test, expect } = require('@playwright/test');

test('Open Luka web', async ({page}) =>{
    await page.goto('https://www.lukareads.com/')
    await expect (page).toHaveTitle ('Luka and Luka Hero Reading Robot, and Chinese Books for Kids – Luka Reads')
    await page.getByRole('link', { name: '*New Stocks* Luka® Hero' }).click();
    await page.getByLabel('Add to cart').click();
    await page.getByRole('link', { name: 'View cart (1 item)' }).click();
    await page.getByLabel('Remove *New Stocks* Luka® Hero').click();
    await page.getByRole('link', { name: 'Continue shopping' }).click();
});