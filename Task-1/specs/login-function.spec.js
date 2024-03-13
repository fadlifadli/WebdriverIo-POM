const assert = require('assert')

// menggunakan function 
async function login(email,password){
    // buka browser dan url
    await browser.url('/')
    // /masukin username (css locator)
        await $('#email').setValue(email);
        // masukin password (css locator)
        await $('#password').setValue(password);
        // klik login
        await $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]').click();

}

describe('KasirDemo Login Test with function', () => {
    it('should login succesfully with valid credentials', async () =>{
        // panggil funsi login
        await login('Tonihawk233@gmail.com','Aku1234')
        //  direct to inventory
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')
        // Logout
        await $('#menu-button-14').click();
        await $('#menu-list-14-menuitem-12').click();

        // assert login page
        await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login')
    })
    it('should login Failed with invalid credentials', async () =>{
        // panggil funsi login
        await login('Tonihawk233@gmail.com','1234')
        //assertion error message
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })
    it('should login Failed with invalid password', async () =>{
         // panggil funsi login
         await login('1234','Aku1234')
        //assertion error message
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('"email" must be a valid email')
    })
})