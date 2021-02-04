import { Selector } from 'testcafe' 

export class LoginPage {
    pageTrait = Selector('#account-login')
    emailTextfield = Selector('#input-email')
    passwordSecureTextfield = Selector('#input-password')
    loginButton = Selector('button[type="submit"]')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async fillInLoginFormWith(userDetails) {
        await this.testObject
            .typeText(this.emailTextfield, userDetails.email)
            .typeText(this.passwordSecureTextfield, userDetails.password)
            .expect(this.emailTextfield.value).eql(userDetails.email)
            .expect(this.passwordSecureTextfield.value).eql(userDetails.password)
    }

    async clickLoginButton() {
        await this.testObject
            .click(this.loginButton)
    }

    async enterOnlyEmailUsing(userDetails) {
        await this.testObject
            .typeText(this.emailTextfield, userDetails.email)
            .expect(this.emailTextfield.value).eql(userDetails.email)
    }

    async enterEmailWithWrongPasswordUsing(userDetails) {
        await this.testObject
            .typeText(this.emailTextfield, userDetails.email)
            .typeText(this.passwordSecureTextfield, userDetails.wrongPassword)
            .expect(this.emailTextfield.value).eql(userDetails.email)
            .expect(this.passwordSecureTextfield.value).eql(userDetails.wrongPassword)
    }

    async verifyIfStillOnPage() {
        await this.testObject
            .expect(this.pageTrait.exists).ok()
    }
}
