import { test, expect } from '@playwright/test';

async function signInAsStandardUser(page) {
    await page.goto('https://qaplayground.com/bank/login');
    await page.getByPlaceholder('Username').fill(process.env.BANK_USERNAME);
    await page.getByPlaceholder('Password').fill(process.env.BANK_PASSWORD);
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();
    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
}

test('Transfer form shows available source balance and excludes it as destination', async ({ page }) => {
    await signInAsStandardUser(page);
    await page.goto('https://qaplayground.com/bank/transfer');

    await expect(page.getByRole('heading', { name: 'Transfer Money' })).toBeVisible();
    await page.getByRole('combobox', { name: 'From Account' }).click();
    await page.getByRole('option', { name: /High-Yield Savings/ }).click();

    await expect(page.getByText(/^Available: \$[\d,]+\.\d{2}$/)).toBeVisible();
    await page.getByRole('combobox', { name: 'To Account' }).click();
    await expect(page.getByRole('option', { name: /Everyday Checking/ })).toBeVisible();
    await expect(page.getByRole('option', { name: /High-Yield Savings/ })).toHaveCount(0);
});

test('Reviewing a transfer shows its details and can be cancelled', async ({ page }) => {
    await signInAsStandardUser(page);
    await page.goto('https://qaplayground.com/bank/transfer');

    await page.getByRole('combobox', { name: 'From Account' }).click();
    await page.getByRole('option', { name: /High-Yield Savings/ }).click();
    await page.getByRole('combobox', { name: 'To Account' }).click();
    await page.getByRole('option', { name: /Everyday Checking/ }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('1');
    await page.getByRole('button', { name: 'Review Transfer' }).click();

    const confirmation = page.getByRole('dialog', { name: 'Confirm Transfer' });
    await expect(confirmation).toContainText('High-Yield Savings');
    await expect(confirmation).toContainText('Everyday Checking');
    await expect(confirmation).toContainText('$1.00');
    await confirmation.getByRole('button', { name: 'Cancel' }).click();
    await expect(confirmation).toBeHidden();
});

test('Completing a transfer today records both sides of the transaction', async ({ page }) => {
    await signInAsStandardUser(page);
    await page.goto('https://qaplayground.com/bank/transfer');

    await page.getByRole('combobox', { name: 'From Account' }).click();
    await page.getByRole('option', { name: /High-Yield Savings/ }).click();
    await page.getByRole('combobox', { name: 'To Account' }).click();
    await page.getByRole('option', { name: /Everyday Checking/ }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('1.37');
    await page.getByRole('button', { name: 'Review Transfer' }).click();

    const confirmation = page.getByRole('dialog', { name: 'Confirm Transfer' });
    await expect(confirmation).toContainText('High-Yield Savings');
    await expect(confirmation).toContainText('Everyday Checking');
    await expect(confirmation).toContainText('$1.37');
    await confirmation.getByRole('button', { name: 'Confirm Transfer' }).click();
    await expect(confirmation).toBeHidden();

    await page.goto('https://qaplayground.com/bank/transactions');
    const transactions = page.getByRole('table', { name: 'All account transactions' });
    const today = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date());

    await expect(
        transactions.getByRole('row')
            .filter({ hasText: today })
            .filter({ hasText: 'Transfer to Everyday Checking' })
            .filter({ hasText: '-$1.37' })
    ).toBeVisible();
    await expect(
        transactions.getByRole('row')
            .filter({ hasText: today })
            .filter({ hasText: 'Transfer from High-Yield Savings' })
            .filter({ hasText: '+$1.37' })
    ).toBeVisible();
});

test('Reviewing a scheduled transfer displays its scheduled date', async ({ page }) => {
    await signInAsStandardUser(page);
    await page.goto('https://qaplayground.com/bank/transfer');

    const scheduledDate = new Date();
    scheduledDate.setDate(scheduledDate.getDate() + 7);
    const dateValue = [
        scheduledDate.getFullYear(),
        String(scheduledDate.getMonth() + 1).padStart(2, '0'),
        String(scheduledDate.getDate()).padStart(2, '0'),
    ].join('-');

    await page.getByRole('combobox', { name: 'From Account' }).click();
    await page.getByRole('option', { name: /High-Yield Savings/ }).click();
    await page.getByRole('combobox', { name: 'To Account' }).click();
    await page.getByRole('option', { name: /Everyday Checking/ }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('1');
    await page.getByRole('radio', { name: 'Schedule for later' }).check();
    await page.getByRole('textbox', { name: 'Select date' }).fill(dateValue);
    await page.getByRole('button', { name: 'Review Transfer' }).click();

    const confirmation = page.getByRole('dialog', { name: 'Confirm Transfer' });
    await expect(confirmation).toContainText('High-Yield Savings');
    await expect(confirmation).toContainText('Everyday Checking');
    await expect(confirmation).toContainText('$1.00');
    await expect(confirmation).toContainText(dateValue);
    await confirmation.getByRole('button', { name: 'Cancel' }).click();
    await expect(confirmation).toBeHidden();
});
