import { test, expect } from '@playwright/test';

test('Get menu list green kart', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
  const menu_list = await page.locator("//h4[@class='product-name']").allTextContents();
  console.log(menu_list);
});

test('Get menu list flipkart', async ({ page }) => {

    await page.goto("https://www.flipkart.com/mobile-phones-store?pageUID=1791898974496");
  const menu_list_1 = await page.locator("//div[@class='css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1b1g84l r-tuq35u r-u8s1d r-q4m81j r-1r0gou5']").allTextContents();
  console.log(menu_list_1);
  console.log(menu_list_1.length);
});