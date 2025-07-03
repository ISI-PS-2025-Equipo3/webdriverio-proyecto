import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";
import overviewPage from "../pageobjects/overview.page";
import account_detailsPage from "../pageobjects/account_details.page";

Given("I am logged in", async () => {
    await loginPage.open();
    await loginPage.login('john', 'demo');
})

When("I click on some account", async () => {
    await overviewPage.checkFirstAccount()
})

Then("I should see more details", async () => {
    let accountNumber = account_detailsPage.accountNumber
    let accountType = account_detailsPage.accountType
    let accountBalance = account_detailsPage.accountBalance
    let availableBalance = account_detailsPage.availableBalance

    await expect(accountNumber).toBeDisplayed();
    await expect(accountType).toBeDisplayed();
    await expect(accountBalance).toBeDisplayed();
    await expect(availableBalance).toBeDisplayed();
})

Then("I can see a list of accounts", async () => {
    let accountsTable = overviewPage.accountsTable
    await expect(accountsTable).toBeDisplayed();
});

Then("Each account shows its balance", async () => {
    let accountsRows = await overviewPage.accountsTableRows
    
    for (const row of accountsRows){
        const balanceCell = row.$('./td[2]');
        const text = (await balanceCell.getText()).trim();

        expect(text).not.toBe('');
    }

});