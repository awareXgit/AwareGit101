const { test, expect } = require('@playwright/test');
const { login } = require('../CMS-login-fn');

test('Verify Memberlist ExportRegister Fail Log', async ({page}) =>{
    await login(page, 'username', 'password'); 
    await page.click('span.nav-link-text:has-text("Member")');
    await page.click('text=Member List');
    await page.click('text=Export Register Fail Log');
    await expect(page.locator('#exportPopupTitle')).toBeVisible();
    await expect(page.locator('#exportPopupTitle')).toHaveText('Register Fail Log');
    await page.click('#submit_action_btn');
    await page.getByText('Close').click();
    await expect(page.locator('#exportPopupTitle')).toBeHidden();
    });

test('Verify Memberlist ExportLogin Log', async ({page}) =>{
    await login(page, 'username', 'password'); 
    await page.click('span.nav-link-text:has-text("Member")');
    await page.click('text=Member List');
    await page.click('text=Export Login Log');
    await expect(page.locator('#exportPopupTitle')).toBeVisible();
    await expect(page.locator('#exportPopupTitle')).toHaveText('Login Log');
    await page.click('#submit_action_btn');
    await page.getByText('Close').click();
    await expect(page.locator('#exportPopupTitle')).toBeHidden();
    });

test('Verify Memberlist ExportFile', async ({page}) =>{
    await login(page, 'username', 'password'); 
    await page.click('span.nav-link-text:has-text("Member")');
    await page.click('text=Member List');
    await page.click('text=Export Register Report');
    await expect(page.locator('#exportPopupTitle')).toBeVisible();
    await expect(page.locator('#exportPopupTitle')).toHaveText('Register Report');
    await page.click('#submit_action_btn');
    await page.getByText('Close').click();
    await expect(page.locator('#exportPopupTitle')).toBeHidden();
    });