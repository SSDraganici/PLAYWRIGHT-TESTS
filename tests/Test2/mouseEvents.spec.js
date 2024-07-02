const{ test, expect} = require('@playwright/test')

test('RightClick', async({page})=> {
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    const RightButton = await page.locator('.context-menu-one')
    page.waitForSelector('.context-menu-one')
    await RightButton.click({RightButton:'right'})
    await page.waitForTimeout(10000)


    
})