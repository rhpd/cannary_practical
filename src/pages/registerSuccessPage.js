import { Selector } from 'testcafe' 

export class RegisterSuccessPage {
    pageTrait = Selector('#short-cut')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async verifyCorrectRegistration() {
        await this.testObject
            .expect(this.pageTrait.exists).ok()
    }
}

