import { test, expect } from '@playwright/test';

import { faker } from "@faker-js/faker";

const employee_data = {
    employee_1: {first_name: faker.person.firstName(), middle_name: faker.person.middleName(), last_name: faker.person.lastName(), emp_id: "234646dfh"},
    employee_2: {first_name: faker.person.firstName(), middle_name: faker.person.middleName(), last_name: faker.person.lastName(), emp_id: "364645fhf"},
    employee_3: {first_name: faker.person.firstName(), middle_name: faker.person.middleName(), last_name: faker.person.lastName(), emp_id: "474645gfg"},
    employee_4: {first_name: faker.person.firstName(), middle_name: faker.person.middleName(), last_name: faker.person.lastName(), emp_id: "584645hfh"},
    employee_5: {first_name: faker.person.firstName(), middle_name: faker.person.middleName(), last_name: faker.person.lastName(), emp_id: "694645ifg"}
};

for(let emp in employee_data){
test(`Verify Add Employee functionality with valid credentials- ${emp}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(employee_data[emp].first_name);
    await page.getByRole('textbox', { name: 'Middle Name' }).click();
    await page.getByRole('textbox', { name: 'Middle Name' }).fill(employee_data[emp].middle_name);
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(employee_data[emp].last_name);
    //await page.getByRole('textbox', { name: 'Employee Id' }).click();
    //await page.getByRole('textbox', { name: 'Employee Id' }).fill(employee_data[emp].emp_id);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});
}