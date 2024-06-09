//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'
test('nom_test_01',async( { page })=>{
    await page.goto('https://www.demoblaze.com/index.html')
    // clik BTN "LOGIN"
    // localisation avec property
    await page.click('id=login2')
    // localisation avec css & remplir le champ
    await page.locator('#loginusername').fill('admin')
    await page.locator('#loginpassword').fill('admin')
    //await page.fill('#loginusername','admin')
    //await page.fill('#loginpassword','admin')
    //await page.click('//button[contains(text(),"Log in")]')
     // localisation par XPath & click BTN "LOGIN"
    await page.click("//button[text()='Log in']")
    //validait affichage du BTN "logout"
    const logoutLink = await page.locator('id=logout2')
    await expect(logoutLink).toBeVisible()
    await expect(logoutLink).toBeEnabled()
    await page.close()



} )