import Page from "./page";

class OverviewPage extends Page {

    public get accountsTable (){
        return $('table[id="accountTable"]');
    }

    public get accountsTableRows () {
        return this.accountsTable.$$('tbody tr')
    }

    public async checkFirstAccount() {
       let table = this.accountsTable;
       let firstAccountLink = table.$('./tbody/tr[1]/td[1]/a');
       await firstAccountLink.click();
    }

}

export default new OverviewPage();