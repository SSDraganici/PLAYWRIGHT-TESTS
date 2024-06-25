import {test, expect} from '@playwright/test'
test('Assertion01',async( { page })=>{
    await page.goto('https://demo.nopcommerce.com/register')
    //1) expect(page).toHaveURL()	Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    //2) expect(page).toHaveTitle()			Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    //3) expect(locator).toBeVisible()		Element is visible
    const logo = await page.locator('.header-logo')
    await expect(logo).toBeVisible()
    //expect(".header-logo").toBeVisible() ---??????
    //4) expect(locator).toBeEnabled()		Control is enabled
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()	
    //5) expect(locator).toHaveAttribute()	Element has attribute
    const RegisterBTN = await page.locator('#register-button')
    await expect(RegisterBTN).toHaveAttribute('type','submit')	
    await expect(RegisterBTN).toHaveAttribute('name','register-button')
    





})