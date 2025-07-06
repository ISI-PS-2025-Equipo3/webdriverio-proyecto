import Page from "./page.js";

class TransferPage extends Page {
  get inputAmount() {
    return $('//input[@id="amount"]');
  }

  get dropdownOriginAccount() {
    return $('//select[@id="fromAccountId"]');
  }

  get dropdownDestinationAccount() {
    return $('//select[@id="toAccountId"]');
  }

  get btnSubmit() {
    return $('//input[@type="submit" and @value="Transfer"]');
  }

  get transferResultContainer() {
    return $("#showResult");
  }

  async setAmount(amount: number) {
    await this.inputAmount.setValue(amount);
  }

  async setOriginAccount() {
    await this.dropdownOriginAccount.waitForClickable({ timeout: 5000 });
    await this.dropdownOriginAccount.selectByIndex(1);
  }

  async setDestinationAccount() {
    await this.dropdownDestinationAccount.waitForClickable({ timeout: 5000 });
    await this.dropdownDestinationAccount.selectByIndex(0);
  }

  async submitTranstacion() {
    await this.btnSubmit.waitForClickable({ timeout: 5000 });
    await this.btnSubmit.click();
    await browser.pause(5000);
  }

  async validateTransaction() {
    await this.transferResultContainer.waitForDisplayed({ timeout: 5000 });
    const text = await this.transferResultContainer.getText();
    return text.includes("hfasdfasdfas been transferred from account");
  }

  open() {
    return super.open("transfer");
  }
}

export default new TransferPage();
