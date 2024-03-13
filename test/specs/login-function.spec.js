const assert = require('assert')

// menggunakan function 
async function login(username,password){
    // buka browser dan url
    await browser.url('/')
    // /masukin username (css locator)
        await $('#user-name').setValue(username);
        // masukin password (css locator)
        await $('#password').setValue(password);
        // klik login
        await $('#login-button').click();

}

describe('SauceDemo Login Test with function', () => {
    it('should login succesfully with valid credentials', async () =>{
        // panggil funsi login
        await login('standard_user','secret_sauce')
        //  direct to inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('should login Failed with invalid credentials', async () =>{
        // panggil funsi login
        await login('invalid_user','secret_sauce')
        //assertion error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
    it('should login Failed with invalid password', async () =>{
         // panggil funsi login
         await login('standard_user','invalid_user')
        //assertion error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
})