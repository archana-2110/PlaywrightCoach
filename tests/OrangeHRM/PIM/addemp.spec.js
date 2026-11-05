import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Verify add employee functionality', async ({ page }) => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME || 'Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD || 'admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL(/\/dashboard\/index/, { timeout: 30000 });
  await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible({ timeout: 30000 });
  await page.getByRole('link', { name: 'PIM' }).click();

  await expect(page.getByRole('link', { name: 'Add Employee' })).toBeVisible({ timeout: 30000 });
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible({ timeout: 30000 });
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 30000 });
});