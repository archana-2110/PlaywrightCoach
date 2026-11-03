import {test, expect} from '@playwright/test';

test('Different Browsers', async ({ page, browserName }) => {

   ////h4[text()="Cauliflower - 1 Kg"]/../div[3]/button

   switch("Brocolli"){
    case "Brocolli":
        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
        await page.locator('//h4[text()="Brocolli - 1 Kg"]/../div[3]/button').click();
        break;

    case "Mushroom":
        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
        await page.locator('//h4[text()="Mushroom - 1 Kg"]/../div[3]/button').click();
        break;

    case "tomato":
        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
        await page.locator('//h4[text()="Tomato - 1 Kg"]/../div[3]/button').click();
        break;

    default:
        console.log("No such product found");
        break;
   }

   
});