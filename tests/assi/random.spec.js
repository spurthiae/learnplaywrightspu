import { test, expect } from '@playwright/test';

test('demoqa cli', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    let randomchars = (Math.random() + 1).toString(36).substring(7);
    await page.getByRole('textbox', { name: 'Full Name' }).fill('John Doe'+randomchars);
    await page.getByRole('textbox', { name: 'name@example.com' }).fill('john'+randomchars+'@example.com');
    await page.getByRole('textbox', { name: 'Current Address' }).fill('123 Main St'+randomchars);
    await page.getByRole('textbox').nth(3).fill('456 Elm St'+randomchars);
    await page.getByRole('button', { name: 'Submit' }).click();
});