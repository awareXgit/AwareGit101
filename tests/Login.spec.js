// @ts-check
const { test, expect } = require('@playwright/test');

test('Login with blank all fields', async ({page}) =>{ // Renamed from "Login with blank fill"
    await page.goto('https://www.saucedemo.com/')
    await expect(page.locator('#login-button')).toBeVisible();
    await page.locator('#login-button').click(); 
    await expect(page.locator('text=Epic sadface: Username is required')).toBeVisible();
});

test('Login with blank username', async ({page}) =>{ // Renamed from "Login with blank user name"
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click(); 
    await expect(page.locator('text=Epic sadface: Username is required')).toBeVisible();
});

test('Login with blank password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#login-button').click(); 
    await expect(page.locator('text=Epic sadface: Password is required')).toBeVisible();
});

test('Login with invalid username and password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard');
    await page.locator('#password').fill('secret111');
    await page.locator('#login-button').click(); 
    await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login with invalid password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('t111');
    await page.locator('#login-button').click(); 
    await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login with invalid username', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard999');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click(); 
    await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login successfully to web', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click(); 
    await expect(page.locator('.inventory_list')).toBeVisible(); // Assuming the user is redirected to a page with inventory list after login
});
