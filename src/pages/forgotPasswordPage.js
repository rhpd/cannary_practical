import { Selector } from 'testcafe' 

export class ForgotPasswordPage {
    emailTextfield = Selector('#input-email')
    submitButton = Selector('button[type="submit"]')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async enterEmailAddressUsing(userDetails) {
        await this.testObject
            .typeText(this.emailTextfield, userDetails.email)
            .expect(this.emailTextfield.value).eql(userDetails.email)
    }

    async clickSubmitButton() {
        await this.testObject
            .click(this.submitButton)
    }
}