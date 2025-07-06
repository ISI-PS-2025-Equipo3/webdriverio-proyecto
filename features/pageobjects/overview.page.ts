import Page from "./page";

class OverviewPage extends Page {
  get btnTransfer() {
    return $('//a[normalize-space()="Transfer Funds"]');
  }
  public get btnPayment(){
    return $('//a[normalize-space()="Bill Pay"]')
  }

  public get accountsTable() {
    return $('table[id="accountTable"]');
  }

  public get accountsTableRows() {
    return this.accountsTable.$$("tbody tr");
  }

  public async checkFirstAccount() {
    let table = this.accountsTable;
    let firstAccountLink = table.$("./tbody/tr[1]/td[1]/a");
    await firstAccountLink.click();
  }

  public async navigateToTransfer() {
    const button = this.btnTransfer;
    await button.waitForClickable({ timeout: 5000 });
    await button.click();
  }

  public async navigateToBillPay(){
    const button = this.btnPayment;
    await button.waitForClickable({ timeout: 5000 });
    await button.click();
  }
}

export default new OverviewPage();
