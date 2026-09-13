import { test, expect } from '@playwright/test';
const { faker } = require('@faker-js/faker');

test('Fill and submit the DemoQA text box form', async ({ page }) => {
  test.setTimeout(60000);

  const formData = {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    currentAddress: faker.location.streetAddress(),
    permanentAddress: faker.location.streetAddress(),
  };

  await page.goto('https://demoqa.com/text-box', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
  await page.getByRole('textbox', { name: 'Full Name' }).fill(formData.fullName);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(formData.email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(formData.currentAddress);
  await page.locator('#permanentAddress').fill(formData.permanentAddress);
  await page.getByRole('button', { name: 'Submit' }).click();

  const output = page.locator('#output');
  await expect(output).toBeVisible();
  await expect(output).toContainText(formData.fullName);
  await expect(output).toContainText(formData.email);
  await expect(output).toContainText(formData.currentAddress);
  await expect(output).toContainText(formData.permanentAddress);
});
