import { Selector } from 'testcafe' 

export class PinCreationPage {
    accountPinSecureTextfield = Selector('#account-pin')
    submitButton = Selector('button[type="submit"]')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async enterAccountPin(userDetails) {
        await this.testObject
            .typeText(this.accountPinSecureTextfield, userDetails.accountPin)
            .expect(this.accountPinSecureTextfield.value).eql(userDetails.accountPin)
    }

    async clickSubmitButton() {
        await this.testObject
            .click(this.submitButton)
    }
}

