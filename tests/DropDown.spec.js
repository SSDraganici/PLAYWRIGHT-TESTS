const{ test, expect} = require('@playwright/test')
    test.skip('DropDown01', async({page})=> { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByText('Country').scrollIntoViewIfNeeded();
    await page.locator('//*[@id="country"]').selectOption({label:"India"})
    await page.waitForTimeout(5000)
})
test('DropDown02', async({page})=> { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByText('Country').scrollIntoViewIfNeeded();
    await page.locator('//*[@id="country"]').click()
    //await page.waitForSelector('//option[contains(text(),"Japan")]'); 
    await page.waitForSelector('//*[@id="country"]/option[7]');
const locators = page.locator('//option[contains(text(),"Japan")]').all();
for (const locator of locators) {
 await locator.click();
}
   /* const NewCountry = page.locator('//option[contains(text(),"Japan")]');
        for (const el of await NewCountry.elementHandles()) {
    await el.click();
}*/
    await page.waitForTimeout(5000)
})



/* test('', async({page})=> { 
    await page.goto('');
        
}) */