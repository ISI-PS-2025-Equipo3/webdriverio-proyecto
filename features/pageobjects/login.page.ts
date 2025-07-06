import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $('input[name="username"]');
  }

  public get inputPassword() {
    return $('input[name="password"]');
  }

  public get btnSubmit() {
    return $('input[value="Log In"]');
  }

  public get pAuthenticationError() {
    return $("p*=The username and password could not be verified");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.waitForClickable({ timeout: 5000 });

    await this.inputUsername.setValue(username);
    await this.inputPassword.waitForClickable({ timeout: 5000 });

    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("parabank");
  }
}

export default new LoginPage();
