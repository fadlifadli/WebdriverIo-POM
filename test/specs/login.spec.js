const assert = require('assert')

describe('Saucedemo Login test', () => {
    it('should login succesfully with valid crendetials', async () => {
        // Buka browser Url
        await browser.url('/')

        // masukin usernam (css-selector)
        await $('#user-name').setValue('standard_user');
        // masukin password (css-selector)
        await $('#password').setValue('secret_sauce');

        // Klik button login (css-selector)
        await $('#login-button').click();
        // inventory page
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('should login Invalid username', async () => {
        // Buka browser Url
        await browser.url('/')

        // masukin usernam (css-selector)
        await $('#user-name').setValue('invalid');
        // masukin password (css-selector)
        await $('#password').setValue('secret_user');

        // Klik button login (css-selector)
        await $('#login-button').click();
        // assertion error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
})