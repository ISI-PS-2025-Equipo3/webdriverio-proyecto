import Page from "./page";

class AccountDetailsPage extends Page{

    public get accountNumber () {
        return $('td[id="accountId"]')
    }

    public get accountType () {
        return $('td[id="accountType"]')
    }

    public get accountBalance () {
        return $('td[id="balance"]')
    }

    public get availableBalance () {
        return $('td[id="availableBalance"]')
    }

}

export default new AccountDetailsPage();