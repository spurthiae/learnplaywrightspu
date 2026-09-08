import { test, expect } from '@playwright/test';

const { faker } = require('@faker-js/faker');


test('demoqa json', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    
    await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
    await page.getByRole('textbox', { name: 'name@example.com' }).fill(faker.internet.email());
    await page.getByRole('textbox', { name: 'Current Address' }).fill(faker.location.city());
    await page.getByRole('textbox').nth(3).fill(faker.location.country());
    await page.getByRole('button', { name: 'Submit' }).click();

});