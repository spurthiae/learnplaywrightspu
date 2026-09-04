import { test, expect } from '@playwright/test';
const { faker } = require('@faker-js/faker');


test('verify add employee with basic details ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.getByRole('link', { name: 'Add Employee' })).toBeVisible();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
  await page.getByRole('textbox', { name: 'Last Name' }).click();

  await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());
  await page.getByRole('textbox').nth(4).click();

 // await page.getByRole('textbox').nth(4).fill(faker.string.alphanumeric());  //directly if i give 
 
  let empid=faker.string.alphanumeric(5);  //generate random string and store in variable
  await page.getByRole('textbox').nth(4).fill(empid); 
 


  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Successfully Saved').click();
  
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});