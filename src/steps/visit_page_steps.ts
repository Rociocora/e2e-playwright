import { When } from '@cucumber/cucumber';


When('I navigate to main page', async function () {
  await this.page.goto(this.URL);
});

When('I test playwrith record', () => {
  // Write code here that turns the phrase above into concrete actions
})
