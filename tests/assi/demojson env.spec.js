import { test, expect } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config({ path: '.github/workflows/.env.qa' });

test('demoqa env', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    
    await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.Full_Name);
    await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.Email);
    await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.Current_Address);
    await page.getByRole('textbox').nth(3).fill(process.env.Permanent_Address);

});