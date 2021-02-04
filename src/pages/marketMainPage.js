import { Selector } from 'testcafe' 

export class MarketMainPage {
    searchTextfield = Selector('#extension-search').child('div').child('input[type="text"]')
    searchButton = Selector('#button-search')
    searchResultsContainer = Selector('#extension-list')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async searchFor(searchString) {
        await this.testObject
            .typeText(this.searchTextfield, searchString)
            .expect(this.searchTextfield.value).eql(searchString)
    }

    async executeSearch() {
        await this.testObject.click(this.searchButton)
    }

    async verifySearchResultsForQuery(querySearchString) {

        const resultCount = await this.searchResultsContainer.find('div.col-md-4').count
        for (let resultIndex = 0; resultIndex < resultCount; resultIndex ++) {
            
            await this.testObject
                .expect(this.searchResultsContainer.find('div.col-md-4').nth(resultIndex).innerText).contains(querySearchString)
   
        }
    }

    async verifySortByRecentlyUpdated() {

    }

    async verifySortByRecentlyAdded() {
        
    }

    async verifySortByRating() {
        
    }

    async verifySortByName() {
        
    }

    async verifySortByPrice() {
        
    }
}