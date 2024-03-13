const assert = require('assert')

describe('Open Sauce Demo', () => {
    it('should open browser dan redirect to saucedemo is succes', async () => {
        // Buka browser Url
        await browser.url('/')

        // Assert?
        // Url sudah benar atau belum?
        // lakukan assertion pada URL
        const currentURL = await browser.getUrl();
        const expectedURL= 'https://www.saucedemo.com/'

        await assert.strictEqual(currentURL, expectedURL, `URL tidak sesuai. Actual : ${currentURL}, Expected : ${expectedURL} `)
    })
    it('should open browser dan redirect to saucedemo is wrong URL', async () => {
        // Buka browser Url
        await browser.url('/')

        // Assert?
        // Url sudah benar atau belum?
        // lakukan assertion pada URL
        const currentURL = await browser.getUrl();
        const expectedURL= 'https://www.saucedemoa.com/'

        await assert.strictEqual(currentURL, expectedURL, `URL tidak sesuai. Actual : ${currentURL}, Expected : ${expectedURL} `)
    })
})