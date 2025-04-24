const { test, expect } = require('@playwright/test');

test('Login with blank all fields', async ({page}) =>{
    await page.goto('https://www.theregister.com/')
    await expect(page.locator('span.visually_hidden')).toBeVisible();
    await expect(page.locator('text=Sign in / up')).toBeVisible();
    await page.locator('#mob_user_text').click(); 
    await expect(page.locator('input[value="Sign in"]')).toBeVisible();
    await page.locator('input[value="Sign in"]').click();
    await expect(page.locator('text=You must supply the email address.')).toBeVisible();
    await expect(page.locator('.login_mes')).toContainText('Please sign in (or create an account)');
    await expect(page.locator('text=create an account')).toHaveAttribute(
        'href',
        'https://account.theregister.com/register/?product=simple&r=https%3A%2F%2Fwww.theregister.com%2F'
      );   
    await page.locator('text=create an account').click();
    const inputId = 'forename';
    const labelText = await page.locator(`label[for="${inputId}"]`).textContent();
    expect(labelText.trim()).toBe('First name');
    await page.locator(`label[for="${inputId}"]`).fill('standard_user');
    await expect(page.locator('label[for="surname"]')).toHaveText('Last name');
    await expect(page.locator('label[for="handle"]')).toHaveText('Forum user name');
    await expect(page.locator('label[for="registration_work_email"]')).toHaveText('Work Email');
    await expect(page.locator('label[for="registration_password"]')).toHaveText('Password');
    await expect(page.locator('label[for="confirm_password"]')).toHaveText('Confirm Password');
    await expect(page.locator('label[for="reg_surveys"]')).toHaveText("I would like to receive invites to participate in The Register's occasional industry research studies");
    await expect(page.locator('label[for="weekly_papers"]')).toHaveText("Receive The Register's Tech Resources update (access industry whitepapers, reports, eBooks etc.)");
    await expect(page.locator('label[for="reg_events"]')).toHaveText("Receive The Register's Events update (webcasts, in-person events, lectures and workshops)");
    await expect(page.locator('p', { hasText: 'You can update' })).toHaveText('You can update your preferences, unsubscribe or delete your account at any time by logging into the site, or via the links at the bottom of any of our emails.');
    await expect(page.locator('input[value="Sign-up"]')).toBeVisible();
    await page.locator('input[id="register_submit"]').click();
});
test('Login successfully to web', async ({page}) =>{
    await page.goto('https://www.theregister.com/')
    await page.locator('#mob_user_text').click();
    await page.locator('text=create an account').click();
    const inputId = 'forename';
    const labelText = await page.locator(`label[for="${inputId}"]`).textContent();
    expect(labelText.trim()).toBe('First name');
    await page.locator(`label[for="${inputId}"]`).fill('AwareFirst');
    await page.locator('label[for="surname"]').fill('AwareLast');
    await page.locator('label[for="handle"]').fill('AwareTest1');
    await page.locator('label[for="registration_work_email"]').fill('qaemtest+1@gmail.com');
    await page.locator('label[for="registration_password"]').fill('@Test111');
    await page.locator('label[for="confirm_password"]').fill('@Test111');
    await page.locator('#reg_surveys').check();
    await page.locator('input[id="register_submit"]').click();
});