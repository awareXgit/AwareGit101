// @ts-check
const { test, expect } = require('@playwright/test');

test('Slect item to cart', async ({page}) =>{
    await page.goto('https://www.lukareads.com/')
    await expect (page).toHaveTitle ('Luka and Luka Hero Reading Robot, and Chinese Books for Kids – Luka Reads')
    const locator = page.locator("ul.grid.grid--uniform.grid--view-items > li");
    //await locator.first().click();   
    await locator.nth(1).click();   
    await page.getByLabel('Add to cart').click();
    await page.getByRole('link', { name: 'View cart (1 item)' }).click();
    await page.getByRole('link', { name: 'Remove' }).click(); 
});