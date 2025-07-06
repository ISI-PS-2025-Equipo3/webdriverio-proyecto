import { Then, When } from "@wdio/cucumber-framework";
import paymentPage from "../pageobjects/payment.page";
import overviewPage from "../pageobjects/overview.page";

When("I make a payment to a beneficiary", async () => {
    await overviewPage.navigateToBillPay();
    await paymentPage.sendPayment();
})

When("I see a confirmation message with the data", async () => {
    let confirmationDialog = paymentPage.confirmationDialog
    await expect(confirmationDialog).toBeDisplayed();
})

Then("I see a message with the success status of the operation", async () => {
    let paymentComplete = $('//h1[text()="Bill Payment Complete"]')
    await expect(paymentComplete).toBeDisplayed();
})