import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";
import overviewPage from "../pageobjects/overview.page";
import transferPage from "../pageobjects/transfer.page";

Given("I am logged in trans", async () => {
  await loginPage.open();
  await loginPage.login("john", "demo");
});

When(
  "I introduce valid values {string} as origin, {string} as destination and {string} as amount",
  async (origin: string, destination: string, amount: number) => {
    await overviewPage.navigateToTransfer();
    await transferPage.setAmount(amount);
    await transferPage.setOriginAccount();
    await transferPage.setDestinationAccount();
    await transferPage.submitTranstacion();
  }
);

Then("should be displayed a messaje with the success info", async () => {
  await transferPage.validateSuccefulTransaction();
});



When(
  "Amount value {string} is bigger than the available balance",
  async (origin: string, destination: string, amount: number) => {
    await overviewPage.navigateToTransfer();
    await transferPage.setAmount(amount);
    await transferPage.setOriginAccount();
    await transferPage.setDestinationAccount();
    await transferPage.submitTranstacion();
  }
);

Then("should be displayed a messaje with the error info", async () => {
  await transferPage.validateNotTransaction();
});
