const { test, expect } = require('@playwright/test');
const { login } = require('./CMS-login-fn');


test('Verify Memberlist View page', async ({page}) =>{
    await login(page, 'username', 'password'); 
    await page.click('span.nav-link-text:has-text("Member")');
    await page.click('text=Member List');
    await expect(page.locator('text=Export Register Fail Log')).toBeVisible();
    await expect(page.locator('text=Export Login Log')).toBeVisible();
    await expect(page.locator('text=Export Register Report')).toBeVisible();
    await expect(page.locator('text=New Member Total')).toBeVisible();
    await expect(page.locator('text=Existing Member Total')).toBeVisible();
    await expect(page.locator('text=Web Portal Member Total')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Id', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Loyalty Id', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'First Login Time', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Last Login Time', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Device Type', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'App Version', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Referral Code', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Register Type', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Status', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Created At(Register Date)', exact: true })).toBeVisible();
    });

test('Verify Memberlist Search', async ({page}) =>{
    await login(page, 'username', 'password'); 
    await page.click('span.nav-link-text:has-text("Member")');
    await page.click('text=Member List');
    await page.locator('#dt-search-0').fill('70501243');
    });

test('Verify Memberlist ExportFile', async ({page}) =>{
    await login(page, 'username', 'password'); 
    await page.click('span.nav-link-text:has-text("Member")');
    await page.click('text=Member List');
    await page.click('text=Export Register Fail Log');
    await expect(page.locator('#exportPopupTitle')).toBeVisible();
    await expect(page.locator('#exportPopupTitle')).toHaveText('Register Fail Log');
    await page.click('#submit_action_btn');
    });
    