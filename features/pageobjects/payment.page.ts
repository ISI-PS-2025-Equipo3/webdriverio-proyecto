import Page from "./page";

class PaymentPage extends Page {

    public get confirmationDialog(){
        return $('//div[text()="Accept"');
    }

    public async setPayeeName(payeeName: string = "dummy") {
        let payeeNameInput = $('input[name="payee.name"]');
        await payeeNameInput.setValue(payeeName);
    }

    public async setAddress(address: string = "dummyAddress"){
        let addressInput = $('input[name="payee.address.street"]');
        await addressInput.setValue(address);
    }

    public async setCity(city: string = "dummyCity"){
        let cityInput = $('input[name="payee.address.city"]');
        await cityInput.setValue(city);
    }

    public async setState(state: string = "dummyState"){
        let stateInput = $('input[name="payee.address.state"]');
        await stateInput.setValue(state);
    }

    public setZipCode(zipCode: string = "dummyZipCode"){
        let zipInput = $('input[name="payee.address.zipCode"]');
        zipInput.setValue(zipCode);
    }
    
    public setPhone(phoneNumber: string = "111111111"){
        let phoneInput = $('input[name="payee.phoneNumber"]');
        phoneInput.setValue(phoneNumber);
    }

    public setPayeeAccount(payeeAccount: string = "12345"){
        let payeeAccountInput = $('input[name="payee.accountNumber"]');
        payeeAccountInput.setValue(payeeAccount);
    }

    public setVerifyAccount(payeeAccount: string = "12345"){
        let verifyAccountInput = $('input[name="payee.accountNumber"]');
        verifyAccountInput.setValue(payeeAccount);
    }

    public setAmount(amount: number = 100){
        let amountInput = $('input[name="amount"]');
        amountInput.setValue(amount);
    }

    public clickPaymentBtn(){
        const paymentBtn = $('input[value="Send Payment"]');
        paymentBtn.click();
    }

    public async sendPayment(){
        this.setPayeeName();
        this.setAddress();
        this.setCity();
        this.setState();
        this.setZipCode();
        this.setPhone();
        this.setPayeeAccount();
        this.setVerifyAccount();
        this.setAmount();
        this.clickPaymentBtn();
    }

    open(){
        return super.open("billpay");
    }
}

export default new PaymentPage();