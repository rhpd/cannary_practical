import { PageFactory } from '../pageFactory'
import activeUser from '../Data/activeUser'

fixture `Login on opencart.com`
    .page `https://www.opencart.com/index.php?route=account/login`

test('Login with valid, active credentials', async testObject => {
    let pages = new PageFactory(testObject)

    await pages.loginPage().fillInLoginFormWith(activeUser)
    await pages.loginPage().clickLoginButton()
    await pages.pinLoginPage().enterAccountPin(activeUser.accountPin)
    await pages.pinLoginPage().clickContinueButton()
    await pages.accountPage().verifyCorrectLogin()
})

test('Try to login without entering credentials', async testObject => {
    let pages = new PageFactory(testObject)

    await pages.loginPage().clickLoginButton()
    await pages.loginPage().verifyIfStillOnPage()
})

test('Try to login without entering password', async testObject => {
    let pages = new PageFactory(testObject)

    await pages.loginPage().enterOnlyEmailUsing(activeUser)
    await pages.loginPage().clickLoginButton()
    await pages.loginPage().verifyIfStillOnPage()
})

test('Try to login with incorrect password', async testObject => {
    let pages = new PageFactory(testObject)

    await pages.loginPage().enterEmailWithWrongPasswordUsing(activeUser)
    await pages.loginPage().clickLoginButton()
    await pages.loginPage().verifyIfStillOnPage()
})