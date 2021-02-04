import { Selector } from 'testcafe' 

export class PinLoginPage {
    accountPinSecureTextfield = Selector('#input-pin')
    continueButton = Selector('button[type="submit"]')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async enterAccountPin(accountPin) {
        await this.testObject
            .typeText(this.accountPinSecureTextfield, accountPin)
            .expect(this.accountPinSecureTextfield.value).eql(accountPin)
    }

    async clickContinueButton() {
        await this.testObject
            .click(this.continueButton)
    }
}