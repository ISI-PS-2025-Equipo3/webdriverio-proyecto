import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";
import overviewPage from "../pageobjects/overview.page";
import loanPage from "../pageobjects/loan.page";

Given("I am logged in loan", async () => {
  await loginPage.open();
  await loginPage.login("john", "demo");
});

When(
  "I Navigate to the loan request page",
  async () => {
    await overviewPage.navigateToLoan();
    
  }
);

When('I fill in the loan request form with valid data', async () => {
  await loanPage.setAmount(1000);
  await loanPage.setPaimentAmount(50);
});

When('I submit the loan request', async () => {
    await loanPage.submitTranstacion();
});

Then("should be displayed a messaje with the success loan info", async () => {
  await loanPage.validateLoan();
});


