//const {test ,expect} = require('@playwright/test')
import { test, expect } from '@playwright/test'

test('Amazon CA test', async ({ page }) => {
    await page.goto('https://www.amazon.ca/?tag=hydcaabkg-20&hvadid=677743576480&hvpos=&hvnetw=g&hvrand=8785029548262258171&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9000441&hvtargid=kwd-360364908397&ref=pd_sl_2g3jlg2slz_e&hydadcr=20061_13508849&gad_source=1')
    const titrepage = await page.title()
    console.log(titrepage)
    await expect(page).toHaveTitle('Amazon.ca: Low Prices – Fast Shipping – Millions of Items')
    const urlpage = await page.url()
    console.log(urlpage)
    await expect(page).toHaveURL('https://www.amazon.ca/?tag=hydcaabkg-20&hvadid=677743576480&hvpos=&hvnetw=g&hvrand=8785029548262258171&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9000441&hvtargid=kwd-360364908397&ref=pd_sl_2g3jlg2slz_e&hydadcr=20061_13508849&gad_source=1')
    await page.close()
})
/*
*/