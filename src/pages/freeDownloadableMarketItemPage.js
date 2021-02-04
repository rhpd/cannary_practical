import { Selector } from 'testcafe'
import request from 'request';

export class FreeDownloadableMarketItemPage {
    downloadButton = Selector('#buy').child('a')
    finalDownloadButton = Selector('#tab-download').child('div').child('table').child('tbody').child('tr').child('td').child('a')

    constructor(asynchonousTestObject) {
        this.testObject = asynchonousTestObject
    }

    async clickDownloadButton() {
        await this.testObject
            .click(this.downloadButton)
    }

    async clickFinalDownloadButtonAndCheckResponse() {
        const downloadLink = await this.finalDownloadButton.getAttribute('href')
        await this.testObject.click(this.finalDownloadButton)
        const statusCode = await this.getResponseStatusCode(downloadLink);
        await this.testObject.expect(statusCode).eql(200);
    }

    getResponseStatusCode = link => {
        return new Promise((resolve, reject) => {
            request(link, function (error, response, body) {
                if(error) {
                    reject(error);
                    return;
                }
    
              resolve(response && response.statusCode);
          });
        });
    }
}