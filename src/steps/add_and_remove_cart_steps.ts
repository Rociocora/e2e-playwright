import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';



When('the user add to cart {string}', async function (itemname: string) {
    await this.page.locator('[data-test="add-to-cart-'+itemname.toLowerCase().replaceAll(" ","-")+'"]').click();
  })

Then('the user click on the cart button', async function () {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
})

Then('the user should see {string} product on the cart', async function (productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
})

Then('the user click on the Remove button', async function (){
    await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
})

Then('the user click on the Continue Shopping button', async function () {
    await this.page.locator('[data-test="continue-shopping"]').click();
})

