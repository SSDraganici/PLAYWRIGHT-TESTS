const{ test, expect} = require('@playwright/test')

    test.skip('KeyboardAction', async({page})=> { 
    await page.goto('https://gotranscript.com/text-compare');
    //const FirstFild = await page.locator('//*[@id="diff"]/form/div[1]/div[1]/textarea');
    //await FirstFild.fill('test test test');
    //await page.type('textarea[name="text1"]','test test test')
    await page.locator('textarea[name="text1"]').fill('test test test test');
    // Ctrl+A
    await page.keyboard.press('Meta+A');
    await page.waitForTimeout (5000);
    // Ctrl+c
    await page.keyboard.press('Meta+C');
    await page.waitForTimeout (5000);
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Meta+V'); 
    await page.waitForTimeout (10000);

}) 
    test.skip('DropDown', async({page})=> { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors',['Red','Blue','Green'] )
    await page.waitForTimeout(5000)
    //assertion de nombre d'option de dropdown
    await expect(page.locator('#colors option')).toHaveCount(5)
    
})

    test('DropDown2', async({page})=> { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//*[@id="country"]/option[2]').click()
        
})

/* test('', async({page})=> { 
    await page.goto('');
        
}) */