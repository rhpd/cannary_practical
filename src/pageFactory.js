// import { Selector } from 'testcafe'
import { RegisterPage } from './pages/registerPage'
import { PinCreationPage } from './pages/pinCreationPage'
import { RegisterSuccessPage } from './pages/registerSuccessPage'
import { LoginPage } from './pages/loginPage'
import { AccountPage } from './pages/accountPage'
import { PinLoginPage } from './pages/pinLoginPage'
import { ForgotPasswordPage } from './pages/forgotPasswordPage'
import { FreeDownloadableMarketItemPage } from './pages/freeDownloadableMarketItemPage'
import { MarketMainPage } from './pages/marketMainPage'

export class PageFactory {

    constructor(testCafeeObject) {
        this.testObject = testCafeeObject
    }

    registerPage() {
        return new RegisterPage(this.testObject)
    }

    pinCreationPage() {
        return new PinCreationPage(this.testObject)
    }

    registerSuccessPage() {
        return new RegisterSuccessPage(this.testObject)
    }

    loginPage() {
        return new LoginPage(this.testObject)
    }

    accountPage() {
        return new AccountPage(this.testObject)
    }

    pinLoginPage() {
        return new PinLoginPage(this.testObject)
    }

    forgotPasswordPage() {
        return new ForgotPasswordPage(this.testObject)
    }

    freeDownloadableMarketItemPage() {
        return new FreeDownloadableMarketItemPage(this.testObject)
    }

    marketMainPage() {
        return new MarketMainPage(this.testObject)
    }
}

