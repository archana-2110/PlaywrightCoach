import {test, expect} from '@playwright/test';

test("Verify Credit Transaction", async ({ page }) => {
    await page.goto("https://qaplayground.com/bank/login");
    await page.getByPlaceholder("Username").fill(process.env.BANK_USERNAME);
    await page.getByPlaceholder("Password").fill(process.env.BANK_PASSWORD);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome back, Alex' })).toBeVisible();
    await page.getByText('Transactions', { exact: true }).nth(1).click();
    await expect(page.getByRole('heading', { name: 'Transactions' })).toBeVisible();
    await page.getByRole('button', { name: 'Credits' }).click();
    await expect(page.getByRole('columnheader', { name: 'Account' })).toBeVisible();
})