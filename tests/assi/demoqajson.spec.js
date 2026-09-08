import { test, expect } from '@playwright/test';
import logindata from "../../testdata/data.json"
import dotenv from 'dotenv';
dotenv.config({ path: '.github/workflows/.env.qa' });


test('demoqa json', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    
    await page.getByRole('textbox', { name: 'Full Name' }).fill(logindata["Full Name"]);
    await page.getByRole('textbox', { name: 'name@example.com' }).fill(logindata["Email"]);
    await page.getByRole('textbox', { name: 'Current Address' }).fill(logindata["Current Address"]);
    await page.getByRole('textbox').nth(3).fill(logindata["Permanent Address"]);
    await page.getByRole('button', { name: 'Submit' }).click();
});