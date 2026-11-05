import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Add Employment Status', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME || 'Admin');
  await page.getByPlaceholder('Password').fill(process.env.APP_PASSWORD || 'admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL(/\/dashboard\/index/, { timeout: 30000 });
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 30000 });

  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill(faker.person.jobTitle());
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('heading', { name: 'Employment Status' })).toBeVisible({ timeout: 30000 });
});