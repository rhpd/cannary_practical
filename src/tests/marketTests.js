import { PageFactory } from '../pageFactory'
import activeUser from '../Data/activeUser'

fixture `Market Tests`
    .page `https://www.opencart.com/index.php?route=marketplace/extension`

test
    .page `https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=32336&filter_license=0`
    ('Download a free product. (Facebook extension)', async testObject => {
    let pages = new PageFactory(testObject)

    await pages.freeDownloadableMarketItemPage().clickDownloadButton()
    await pages.loginPage().fillInLoginFormWith(activeUser)
    await pages.loginPage().clickLoginButton()
    await pages.pinLoginPage().enterAccountPin(activeUser.accountPin)
    await pages.pinLoginPage().clickContinueButton()
    await pages.freeDownloadableMarketItemPage().clickFinalDownloadButtonAndCheckResponse()
})

test('Test search field returns relevant results', async testObject => {
    let pages = new PageFactory(testObject)

    let searchQuery = 'Facebook' // Case sensitive

    await pages.marketMainPage().searchFor(searchQuery)
    await pages.marketMainPage().executeSearch()
    await pages.marketMainPage().verifySearchResultsForQuery(searchQuery)
})

/*
    Following tests have not been implemented, these schould not be tested through 
    front-end test automation but throug API service testing.

    These tests would, if automated through front-end take up a lot of time since one needs to 
    go through all the result pages and assert all the results and they would be highly 'flacky' (unreliable, unstable)
    because of the dynamic results for each run.

    To test the integration between choosing an option in the 'Sort by' -feature, would be by mocking or
    stubbing the data the front-end receives
*/
test.skip
    .page `https://www.opencart.com/index.php?route=marketplace/extension&sort=date_modified&filter_rating=4`
    ('Test sort by feature works as expected: Sort by Recently Updated', async testObject => {
    // Not implemented - reason: see above comment
})

test.skip
    .page `https://www.opencart.com/index.php?route=marketplace/extension&sort=date_added&filter_rating=4`
    ('Test sort by feature works as expected: Sort by Recently Added', async testObject => {
    // Not implemented - reason: see above comment
})

test.skip
    .page `https://www.opencart.com/index.php?route=marketplace/extension&sort=rating&filter_rating=4`
    ('Test sort by feature works as expected: Sort by Rating', async testObject => {
    // Not implemented - reason: see above comment
})

test.skip
    .page `https://www.opencart.com/index.php?route=marketplace/extension&sort=name&filter_rating=4`
    ('Test sort by feature works as expected: Sort by Name', async testObject => {
    // Not implemented - reason: see above comment
})

test.skip
    .page `https://www.opencart.com/index.php?route=marketplace/extension&sort=price&filter_rating=4`
    ('Test sort by feature works as expected: Sort by Price', async testObject => {
    // Not implemented - reason: see above comment
})