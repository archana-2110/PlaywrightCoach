import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Add Employment Status', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByPlaceholder('Password').fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect( page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByText('Admin', { exact: true }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());
  await page.getByRole('button', { name: 'Save' }).click();
  await expect( page.getByRole('heading', { name: 'Employment Status' })).toBeVisible();

})