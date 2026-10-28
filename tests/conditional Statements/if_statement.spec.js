import { test, expect } from '@playwright/test';

test('Different Browsers', async ({ page, browserName }) => {

    if(browserName == 'chromium') {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    else if(browserName == 'firefox') {
        await page.goto('https://www.naukri.com/registration/createAccount');
    }

    else{
        console.log('Browser not supported for this test');
    }
});