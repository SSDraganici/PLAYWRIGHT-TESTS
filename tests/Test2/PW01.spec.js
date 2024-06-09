const{ test, expect} = require('@playwright/test')

test('new_tes_01', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('.oxd-button oxd-button--medium oxd-button--main orangehrm-login-button')
})