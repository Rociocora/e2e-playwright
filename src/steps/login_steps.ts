import { Given,When,Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

Given('the user is on zara login page', async function () {
    await this.page.goto(this.URL);
  
})

When('the user fill email with {string}', async function (Email: string) {
    await this.page.getByLabel('Email').fill(Email);
  })

When('the user fill password with {string}', async function (password: string) {
    await this.page.getByLabel('Contraseña', { exact: true }).fill(password);
})

When('the user press login button', async function () {
    await this.page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();

})


Then('the user should see error message {string}', async function (errorMessage: string) {
    await expect(this.page.locator('h1')).toContainText(errorMessage);
})

