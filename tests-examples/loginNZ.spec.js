// @ts-check
const { test, expect } = require('@playwright/test');

test('Login to NZ', async ({page}) =>{
    await page.goto('https://www.mobilsmiles.co.nz')
    await expect (page).toHaveTitle ('Homepage | Mobil Smiles NZ')
    await page.getByRole('button', { name: 'Accept all cookies' }).click()
    await page.getByText('login').click()
    await page.getByLabel('Email').fill('qaemtest+nzprd1@gmail.com')
    await page.getByLabel('Password').fill('Test@111')
});