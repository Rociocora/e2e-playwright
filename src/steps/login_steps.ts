import { Given,When,Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

Given('the user is on zara login page', async function () {
    await this.page.goto(this.URL);
  
})

When('I test playwrith record', async function (username: string) {
    await this.page.goto('https://www.zara.com/');
    await this.page.getByLabel('Email').click();
    await this.page.getByLabel('Email').fill('rociocora7@gmail.com');
    await this.page.getByLabel('Contraseña', { exact: true }).click();
    await this.page.getByLabel('Contraseña', { exact: true }).fill('todoslosmeses7');
    await this.page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();
    await this.page.getByRole('button', { name: 'Cerrar' }).click();

  })
  