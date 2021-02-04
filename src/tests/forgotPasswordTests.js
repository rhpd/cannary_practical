import { PageFactory } from '../pageFactory'
import activeUser from '../Data/activeUser'

fixture `Login on opencart.com`
    .page `https://www.opencart.com/index.php?route=account/forgotten`

test('Login with valid, active credentials', async testObject => {
    let pages = new PageFactory(testObject)

    await pages.forgotPasswordPage().enterEmailAddressUsing(activeUser)
    await pages.forgotPasswordPage().clickSubmitButton()
    await pages.loginPage().verifyIfStillOnPage()

})
