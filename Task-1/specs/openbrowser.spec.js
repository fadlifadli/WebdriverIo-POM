const assert = require('assert')

describe('Open Browser KasirDemo', () => {
    it('should open browser dan redirect to kasirdemo.belajarqa.com', async () =>{
        // buka browser dan url
        await browser.url('/')
        
        //assert Url sudah benar atau belum
        // lakukan assert pada URL
        const currentURL = await browser.getUrl();
        const expectedURL =  'https://kasirdemo.belajarqa.com/login'

        await assert.strictEqual(currentURL,expectedURL, `URL Tidak sesuai, Actual: ${currentURL}, Expected : ${expectedURL}`);
    })
    it('should open browser dan redirect to saucedemo.com "Wrong" expected', async () =>{
        // buka browser dan url
        await browser.url('/')
        
        //assert Url sudah benar atau belum
        // lakukan assert pada URL
        const currentURL = await browser.getUrl();
        const expectedURL =  'https://kasirdemo.belajarqa.com/logina'

        await assert.strictEqual(currentURL,expectedURL, `URL Tidak sesuai, Actual: ${currentURL}, Expected : ${expectedURL}`);
    })
})