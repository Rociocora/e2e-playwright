import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';



  When('the user press checkout', async function () {
    await this.page.locator('[data-test="checkout"]').click();
  })
  
  When('the user fill form with name {string}, last name {string} and postal code {string}', async function (name: string, lastname: string, postalcode: string)  {
    await this.page.locator('[data-test="firstName"]').fill(name);
    await this.page.locator('[data-test="lastName"]').fill(lastname);
    await this.page.locator('[data-test="postalCode"]').fill(postalcode);
  })

When('the user press continue button', async function () {
    await this.page.locator('[data-test="continue"]').click();
})

Then('the user should see total price {string}', async function (totalPrice: string) {
    await expect(this.page.locator('[data-test="total-label"]')).toContainText(totalPrice)
})

Then('the user press finish', async function () {
    await this.page.locator('[data-test="finish"]').click();
    await this.page.locator('[data-test="complete-header"]').click();
})

Then('the user should see the buy complete message {string}', async function (buyComplete: string) {
    await expect(this.page.locator('[data-test="complete-header"]')).toContainText(buyComplete);
})


