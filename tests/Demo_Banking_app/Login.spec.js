import { test, expect } from '@playwright/test';
import loginDetails from '../../testdata/bank_login.json';

test('Login with standard user credentials', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(process.env.BANK_USERNAME);
    await page.getByPlaceholder('Password').fill(process.env.BANK_PASSWORD);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();

    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
    await expect(page.getByRole('heading', { name: 'Welcome back, Alex' })).toBeVisible();
});

test('Login with locked user credentials', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(loginDetails.locked_user.username);
    await page.getByPlaceholder('Password').fill(loginDetails.locked_user.password);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();

    await expect(page).toHaveURL('https://qaplayground.com/bank/login');
    await expect(
        page.getByText('Your account has been suspended. Please contact support.', { exact: true })
    ).toBeVisible();
});

test('Login with frozen user credentials', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(loginDetails.frozen_user.username);
    await page.getByPlaceholder('Password').fill(loginDetails.frozen_user.password);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();

    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
});

test('Login with overdraft user credentials', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(loginDetails.overdraft_user.username);
    await page.getByPlaceholder('Password').fill(loginDetails.overdraft_user.password);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();

    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
});

test('Login with slow user credentials', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(loginDetails.slow_user.username);
    await page.getByPlaceholder('Password').fill(loginDetails.slow_user.password);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();

    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
});

test('Login with error user credentials', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(loginDetails.error_user.username);
    await page.getByPlaceholder('Password').fill(loginDetails.error_user.password);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();

    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
});

test('Login with admin user credentials', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(loginDetails.admin_user.username);
    await page.getByPlaceholder('Password').fill(loginDetails.admin_user.password);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();

    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
});
