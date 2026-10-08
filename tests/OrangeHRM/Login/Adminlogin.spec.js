import { test, expect } from '@playwright/test';

import logindata from "../../../testdata/login.json";

test('Verify Admin Login functionality with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
});

test('Verify Admin Login functionality with invalid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.invalid_username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.invalid_password);
  await page.getByRole('button', { name: 'Login' }).click();
});