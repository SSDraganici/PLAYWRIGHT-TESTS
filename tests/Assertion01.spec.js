import {test, expect} from '@playwright/test'
import exp from 'constants'
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
    //6) expect(locator).toBeChecked()		Radio/Checkbox is checked  Newsletter
    // chekbox
    const NewCheckbox = await page.locator('#Newsletter')
    await expect(NewCheckbox).toBeChecked()
    //radiobutton
    const NewRadio = await page.locator('#gender-male')
    //await expect(NewRadio).toBeChecked()
    await expect(NewRadio).not.toBeChecked()
    // 7) expect(locator).toHaveCount()		List of elements has given length
    const LiensPage = await page.locator('a')
    await expect(LiensPage).toHaveCount(61)
    const ImgsPage = await page.locator('img')
    await expect(ImgsPage).toHaveCount(1)
    //8) expect(locator).toHaveValue(value)	Input has a value
    const FirstNameInput = await page.locator('#FirstName')
    await FirstNameInput.fill('Igor')
    await expect(FirstNameInput).toHaveValue('Igor')
    // 9) expect(locator).toContainText()		Element contains text 
    const TextTitle = await page.locator('.page-title>h1')
    await expect(TextTitle).toContainText('Register')
    




   




})