// @ts-check
const { test, expect } = require('@playwright/test');

test('Login with blank fill', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await expect(page.locator('#login-button')).toBeVisible();
    await page.locator('#login-button').click(); 
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Login with blank user name', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click(); 
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Login with blank password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#login-button').click(); 
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Login with invalid user name and password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard');
    await page.locator('#password').fill('secret111');
    await page.locator('#login-button').click(); 
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    await page.waitForTimeout(5000);

});

test('Login with invalid password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard');
    await page.locator('#password').fill('t111');
    await page.locator('#login-button').click(); 
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    await page.waitForTimeout(5000);

});

test('Login with invalid password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard555');
    await page.locator('#password').fill('secret111');
    await page.locator('#login-button').click(); 
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    await page.waitForTimeout(5000);

});

test('Login successfully to web', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click(); 
    await page.waitForTimeout(5000);

});
