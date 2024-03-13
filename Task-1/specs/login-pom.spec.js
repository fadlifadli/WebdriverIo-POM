const Page = require('../../Ppages/page')
const LoginPage = require('../../Ppages/login.page')
const DashboardPage = require('../../Ppages/dashboard-page')

describe('kasirDemo Login Test with Page Object Model', () => {
    beforeEach(async() => {
        // open browser
        Page.open('/')
    })
    it('should login succesfully with valid credentials', async () =>{
        // panggil fungsi login
        await LoginPage.login('Tonihawk233@gmail.com','Aku1234')
        // expected direct page
        await DashboardPage.assertDashboardUrl
    })
    it('should login Failed with invalid credentials', async () =>{
        // panggil fungsi login
        await LoginPage.login('Tonihawk233@gmail.com','1234')
        //assertion error message   
        await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah')
    })
    it('should login Failed with invalid Email', async () =>{
        // panggil fungsi login
        await LoginPage.login('1234','1234')
        //assertion error message   
        await LoginPage.assertErrorMessage('"email" must be a valid email')
    })
})