import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Verify add job title functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME || 'Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD || 'admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL(/\/dashboard\/index/, { timeout: 30000 });
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Job Title' }).fill(faker.person.jobTitle());
  await page.getByRole('textbox', { name: 'Job Description' }).fill(faker.person.jobDescriptor());
  await page.getByRole('textbox', { name: 'Add note' }).fill(faker.person.jobType());
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible({ timeout: 30000 });
});