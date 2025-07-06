import Page from "./page.js";

class LoanPage extends Page {
  get inputLoanAmount() {
    return $('//input[@id="amount"]');
  }

  get dowPaimentAmount() {
    return $('//input[@id="downPayment"]');
  }

  get dropdownFromAccount() {
    return $('//select[@id="fromAccountId"]');
  }

  get btnSubmit() {
    return $('//*[@id="requestLoanForm"]/form/table/tbody/tr[4]/td[2]/input');
  }

  get LoanResultContainer() {
    return $("#loanRequestApproved");
  }

  async setAmount(amount: number) {
    await this.inputLoanAmount.waitForClickable({ timeout: 5000 });
    await this.inputLoanAmount.setValue(amount);
  }

  async setPaimentAmount(amount: number) {
    await this.dowPaimentAmount.waitForClickable({ timeout: 5000 });
    await this.dowPaimentAmount.setValue(amount);
  }

  async setAccount() {
    await this.dropdownFromAccount.waitForClickable({ timeout: 5000 });
    await this.dropdownFromAccount.selectByIndex(0);
  }

  async submitTranstacion() {
    await this.btnSubmit.waitForClickable({ timeout: 5000 });
    await this.btnSubmit.click();
  }

  async validateLoan() {
    const element = this.LoanResultContainer;

    const exists = await element.isExisting();
    const visible = await element.isDisplayed();

    return exists && visible;
  }

  open() {
    return super.open("requestloan");
  }
}

export default new LoanPage();
