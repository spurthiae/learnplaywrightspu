import { test, expect } from "@playwright/test";
import { fakerEN_IN as faker } from "@faker-js/faker";

let randomchars = (Math.random() + 1).toString(36).substring(7);

const employee = {
  employee1: {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  },

  employee2: {
    firstName: "Rahul",
    middleName: "Kumar",
    lastName: "Sharma",
  },

  employee3: {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  },

  employee4: {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  },

  employee5: {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  },
};

for (const [loop, emp] of Object.entries(employee)) {
  test(`add employee ${loop}`, async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByText('PIM').click();
    await page.getByRole('button', { name: 'Add' }).click();

    await page.getByPlaceholder('First Name').fill(emp.firstName);
    await page.getByPlaceholder('Middle Name').fill(emp.middleName);
    await page.getByPlaceholder('Last Name').fill(emp.lastName);

    const saveButton = page.getByRole('button', { name: 'Save' }).last();
    await saveButton.waitFor({ state: 'visible' });
    await saveButton.click();

    // wait for the redirect to the Personal Details page to complete
    await page.waitForURL(/viewPersonalDetails/, { timeout: 15000 });

    await expect(page.getByRole('link', { name: 'Employee List' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  });
}