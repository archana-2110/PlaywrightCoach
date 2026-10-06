import { test, expect } from '@playwright/test';
import logindata from '../../../testdata/login.json';
import { faker } from '@faker-js/faker';

test('Verify add employee functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.valid_username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.valid_password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());
  await page.waitForTimeout(6000);
  await page.getByRole('textbox').nth(4).click();
  //await page.getByRole('textbox').nth(4).fill(faker.number.int({ min: 5, max: 10 }).toString());
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/325');
  //await expect(page.getByRole('heading', { name: 'Archana K' })).toBeVisible();
});