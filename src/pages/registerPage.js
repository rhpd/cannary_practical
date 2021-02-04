import { Selector } from 'testcafe' 

export class RegisterPage {
    userNameTextfield = Selector('#input-username')
    firstNameTextfield = Selector('#input-firstname')
    lastnameTextfield = Selector('#input-lastname')
    emailTextfield = Selector('#input-email')
    passwordSecureTextfield = Selector('#input-password')
    countryDropdown = Selector('#input-country')
    submitButton = Selector('button[type="submit"]')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async fillInUserDetailsWith(userDetails) {
        await this.testObject
            .typeText(this.userNameTextfield, userDetails.userName)
            .typeText(this.firstNameTextfield, userDetails.firstName)
            .typeText(this.lastnameTextfield, userDetails.lastName)
            .typeText(this.emailTextfield, userDetails.email)
            .click(this.countryDropdown)
            .click(this.countryDropdown.find('option').withText(userDetails.country))
            .typeText(this.passwordSecureTextfield, userDetails.password)

            .expect(this.userNameTextfield.value).eql(userDetails.userName)
            .expect(this.firstNameTextfield.value).eql(userDetails.firstName)
            .expect(this.lastnameTextfield.value).eql(userDetails.lastName)
            .expect(this.emailTextfield.value).eql(userDetails.email)
            .expect(this.passwordSecureTextfield.value).eql(userDetails.password)
    }

    async clickSubmitButton() {
        await this.testObject
            .click(this.submitButton)
    }

    async verifyIfStillOnPage() {
        await this.testObject
            .expect(this.userNameTextfield.exists).ok()
    }

}