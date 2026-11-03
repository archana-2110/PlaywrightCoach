import { test, expect } from '@playwright/test';



test('Verify Admin Login functionality with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
});

const invalid_data = {
  data1: { invalid_username: "asdgdsh", invalid_password: "asdasd"},
  data2: { invalid_username: "dhsfsdghvkhj", invalid_password: "cdgsfasd"},
};


for(let data in invalid_data){
test(`Verify Admin Login functionality with invalid credentials- ${data}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(invalid_data[data].invalid_username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(invalid_data[data].invalid_password);
  await page.getByRole('button', { name: 'Login' }).click();
});
}