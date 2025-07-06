import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";
import overviewPage from "../pageobjects/overview.page";
import transferPage from "../pageobjects/transfer.page";

Given("I am logged in trans", async () => {
  await loginPage.open();
  await loginPage.login("john", "demo");
});

When(
  "I introduce valid values on origin account, destination account and amount",
  async () => {
    await overviewPage.navigateToTransfer();
    await transferPage.setAmount(1);
    await transferPage.setOriginAccount();
    await transferPage.setDestinationAccount();
    await transferPage.submitTranstacion();
  }
);

Then("should be displayed a messaje with the success info", async () => {
  await transferPage.validateTransaction();
});

// Then("I should see more details", async () => {
//     let accountNumber = account_detailsPage.accountNumber
//     let accountType = account_detailsPage.accountType
//     let accountBalance = account_detailsPage.accountBalance
//     let availableBalance = account_detailsPage.availableBalance

//     await expect(accountNumber).toBeDisplayed();
//     await expect(accountType).toBeDisplayed();
//     await expect(accountBalance).toBeDisplayed();
//     await expect(availableBalance).toBeDisplayed();
// })

// Then("I can see a list of accounts", async () => {
//     let accountsTable = overviewPage.accountsTable
//     await expect(accountsTable).toBeDisplayed();
// });

// Then("Each account shows its balance", async () => {
//     let accountsRows = await overviewPage.accountsTableRows

//     for (const row of accountsRows){
//         const balanceCell = row.$('./td[2]');
//         const text = (await balanceCell.getText()).trim();

//         expect(text).not.toBe('');
//     }

// });
