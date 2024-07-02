import {test, expect} from '@playwright/test'
test('Assertion01',async( { page })=>{
    await page.goto('https://demo.nopcommerce.com/register')
    // 	Checkbox is checked
    const Checkbox = await page.locator('#Newsletter')
    await expect(Checkbox).toBeChecked()
    //Element is disabled
    
    //const RegisterBTN = await page.locator('#C')
    //await expect(RegisterBTN).toBeEnabled()
    
    //	Container is empty
    const FirstName = await page.locator('#FirstName')
    await expect(FirstName).toBeEmpty()
 





})