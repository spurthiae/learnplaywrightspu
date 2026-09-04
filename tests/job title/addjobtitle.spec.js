import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"

const { faker } = require('@faker-js/faker');


test("Verify admin can add job title", async ({page}) =>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

await page.getByRole('button', { name: 'Login' }).click();

// assertion - expect 
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  
await page.locator('xpath=(//div[@class=\'orangehrm-dashboard-widget-name\'])[1]')

await page.getByText('Time at Work') .click();

await page.getByText('Admin', { exact: true }).first().click()



await page.getByText('Job', { exact: true }).click()

await page.getByRole('menuitem', { name: 'Job Titles' }).click()

await page.getByRole('button', { name: 'Add' }).click()


//javascript code to generate random characters
let randomchars = (Math.random() + 1).toString(36).substring(7);

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle");

//await page.getByRole('textbox').nth(1).fill('Software Engineer' + randomchars);

await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());

await page.getByRole('textbox', { name: 'Type description here' }).fill('Responsible for developing and maintaining software applications.');

await page.getByRole('textbox', { name: 'Add note' }).fill('Additional information about the job title.');

await page.getByRole('button', { name: 'Save' }).click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");
})
