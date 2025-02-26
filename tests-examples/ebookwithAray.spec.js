// @ts-check
const { test, expect } = require('@playwright/test');

test('Select item to cart', async ({page}) =>{
    await page.goto('https://www.lukareads.com/')
    await expect (page).toHaveTitle ('Luka and Luka Hero Reading Robot, and Chinese Books for Kids – Luka Reads')
    const locator = page.locator("ul.grid.grid--uniform.grid--view-items > li");  
    await locator.nth(1).click();   
    await expect(page.locator('#ProductSection-product-template').getByRole('definition').getByText('S$199.00 SGD')).toHaveText('S$199.00 SGD'); 
    await page.getByLabel('Add to cart').click();
    await page.getByRole('link', { name: 'View cart (1 item)' }).click();
    await page.getByRole('link', { name: 'Remove' }).click(); 

    //await page.getByRole('button', { name: 'Luka® Robots & Accessories' }).click();
    // await page.getByRole('link', { name: 'Luka® (Basic, Hero, Mini &' }).click();
    // const page1Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'HERE' }).click();
    // const page1 = await page1Promise;
    // await expect (page1).toHaveTitle('Luka® Reading Robots Comparison Chart – Luka Reads')
    // await page1.waitForTimeout(2000);
    // await page1.close()

    // await page.getByRole('link', { name: 'Free Printables' }).click();
    // await page.getByRole('cell', { name: 'Luka Reads Mid Autumn Festival Coloring Page Mid Autumn Festival' }).getByRole('paragraph').first().click();
    // const page2Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'Luka Reads Mid Autumn Festival Coloring Page' }).click();
    // const page2 = await page2Promise;
    // await expect(page2).toHaveURL('https://cdn.shopify.com/s/files/1/0427/4572/5093/files/Luka_Reads_Mid_Autumn_Festival_Coloring_Page.pdf?v=1601450104')
    // await page2.waitForTimeout(2000)
    // await page2.close()
    // await page.waitForTimeout(2000)
    // await page.close()
});