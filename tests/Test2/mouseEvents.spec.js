const{ test, expect} = require('@playwright/test')

test.skip('RightClick', async({page})=> {
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    const RightButton = await page.locator('.context-menu-one')
    page.waitForSelector('.context-menu-one')
    // BTN droit - click contecst
    await RightButton.click({RightButton:'right'})
    await page.waitForTimeout(10000)
})

test.skip('DubleClick', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const BTNCopy = await page.locator('//button[contains(text(),"Copy Text")]');
    await BTNCopy.dblclick();
    await page.waitForTimeout(10000)
    
})

test.skip('Drug&Drop', async({page})=> {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const OSLO = await page.locator('#box1');
    const NORWAY = await page.locator('#box101');
    await OSLO.dragTo(NORWAY);
    const Stockholn = await page.locator('#box2');
    const pay = await page.locator('#box102');
    await Stockholm.dragTo(pay);
    await page.waitForTimeout(5000);
    
})
test('MouseHover', async({page})=> { 
    await page.goto('https://www.ebay.com/');
    const ElemElect = await page.locator('//*[@id="vl-flyout-nav"]/ul/li[3]');
    await ElemElect.hover();
    await page.waitForTimeout(5000);
}) 
/* test('', async({page})=> { 
    await page.goto('');
        
}) */