import { test, expect } from '@playwright/test';

test('Create Savings Account', async ({ page }) => {
    const accountName = `Automation Savings ${Date.now()}`;

    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(process.env.BANK_USERNAME);
    await page.getByPlaceholder('Password').fill(process.env.BANK_PASSWORD);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome back, Alex' })).toBeVisible();

    await page.goto('https://qaplayground.com/bank/accounts');
    await expect(page.getByRole('heading', { name: 'My Accounts' })).toBeVisible();
    await page.getByRole('button', { name: 'Add Account', exact: true }).click();

    const accountDialog = page.getByRole('dialog', { name: 'Add New Account' });
    await accountDialog.getByRole('textbox', { name: 'Account Name' }).fill(accountName);
    await accountDialog.getByRole('combobox', { name: 'Account Type' }).click();
    await page.getByRole('option', { name: 'Savings', exact: true }).click();
    await accountDialog.getByRole('spinbutton').fill('10000');
    await accountDialog.getByRole('checkbox', { name: 'I accept the terms and conditions' }).check();
    await accountDialog.getByRole('button', { name: 'Add Account', exact: true }).click();

    await expect(accountDialog).toBeHidden();
    await expect(
        page.getByRole('table', { name: 'Accounts' }).getByRole('row').filter({ hasText: accountName })
    ).toBeVisible();
});
