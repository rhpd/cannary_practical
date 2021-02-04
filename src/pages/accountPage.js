import { Selector } from 'testcafe' 

export class AccountPage {
    pageTrait = Selector('#account-account')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async verifyCorrectLogin() {
        await this.testObject
            .expect(this.pageTrait.exists).ok()
    }
}