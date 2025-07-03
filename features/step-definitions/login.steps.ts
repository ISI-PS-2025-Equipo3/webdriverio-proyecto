import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';

Given('I am on the login page', async () => {
    await LoginPage.open()
});

When('I login with valid credentials', async () => {
    await LoginPage.login('john', 'demo')
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
})

Then('I should be redirected to the dashboard', async () => {
    let welcomeMessage = await $('p*=Welcome John Smith');
    await expect(welcomeMessage).toBeDisplayed();
})

Then('I should see an error message saying "The username and password could not be verified', async () => {
    let errorMessage = LoginPage.pAuthenticationError;
    await expect(errorMessage).toBeDisplayed();
})

Then('The login button should be disabled', async () => {
    await expect(LoginPage.btnSubmit).toBeDisabled();
})