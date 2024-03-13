const assert = require('assert')
const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const InventoryPage = require('../../pages/inventory.page')

describe('SauceDemo Login Test with POM ', () => {
    beforeEach(async () => {
        // open browser
        Page.open('/')
    })

    it('should login succesfully with valid credentials', async () =>{
        // panggil funsi login
        await LoginPage.login('standard_user','secret_sauce')
        //  direct to inventory
        await InventoryPage.assertInventoryUrl();
    })
    it('should login Failed with invalid credentials', async () =>{
        // panggil funsi login
        await LoginPage.login('invalid_user','secret_sauce')
        //assertion error message
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })
    it('should login Failed with invalid password', async () =>{
         // panggil funsi login
         await LoginPage.login('standard_user','invalid_user')
        //assertion error message
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
      })
})