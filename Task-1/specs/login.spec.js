const assert = require('assert')

describe('Kasirdemo Login test', () => {
    it('should login succesfully with valid crendetials', async () => {
        // Buka browser Url
        await browser.url('/')

        // masukin usernam (css-selector)
        await $('#email').setValue('Tonihawk233@gmail.com');
        // masukin password (css-selector)
        await $('#password').setValue('Aku1234');

        // Klik button login (css-selector)
        await $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]').click();
        // assert dashboard page
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')

        // Logout
        await $('#menu-button-14').click();
        await $('#menu-list-14-menuitem-12').click();

        // assert login page
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login')
    })
    it('should login Invalid Email', async () => {
        // Buka browser Url
        await browser.url('/')

        // masukin usernam (css-selector)
        await $('#email').setValue('233');
        // masukin password (css-selector)
        await $('#password').setValue('Aku1234');

        // Klik button login (css-selector)
        await $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]').click();
        // assertion error message
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('"email" must be a valid email')
    })
    it('should login Invalid kredensial', async () => {
        // Buka browser Url
        await browser.url('/')

        // masukin usernam (css-selector)
        await $('#email').setValue('Tonihawk233@gmail.com');
        // masukin password (css-selector)
        await $('#password').setValue('1234');

        // Klik button login (css-selector)
        await $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]').click();
        // assertion error message
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })
})