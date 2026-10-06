import { test, expect } from '@playwright/test';

test('Verify with standard_user username and secret_sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
});

test('Verify with locked_out_user username and secret_sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Verify with problem_user username and secret_sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('carry.allTheThings() with the')).toBeVisible();;
});

test('Verify with performance_glitch_user username and secret_sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('carry.allTheThings() with the')).toBeVisible();
});

test('Verify with error_user username and secret_sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
});

test('Verify with visual_user username and secret_sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
});

test('Verify with invalid username and secret_sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('xyz_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('Verify with standard_user username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('xdjsadbsakjd');
  await page.locator('[data-test="login-button"]').click();
  
});

test('Verify with locked_out_user username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('sdhdhdjas');
  await page.locator('[data-test="login-button"]').click();
});


test('Verify with problem_user username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('sdsfsjfas');
  await page.locator('[data-test="login-button"]').click();
});

test('Verify with performance_glitch_user username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('swhwgdhs');
  await page.locator('[data-test="login-button"]').click();
});

test('Verify with error_user username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('fhsgfsdhf');
  await page.locator('[data-test="login-button"]').click();
});

test('Verify with visual_user username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('fhsgfsdhf');
  await page.locator('[data-test="login-button"]').click();
});


test('Verify with invalid username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('fkjfjfdk_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('archdsfbdsf');
  await page.locator('[data-test="login-button"]').click();
});

test('Verify with blank username and blank password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('svg').first()).toBeVisible();
  await expect(page.locator('svg').nth(1)).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
