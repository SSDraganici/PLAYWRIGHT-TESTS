import {test, expect} from '@playwright/test'
//test('plusierLocalisateurs',async( { page })=>{
//    await page.goto('https://www.demoblaze.com/index.html')
//    const liens = await page.$$('a')
//    for(const lien of liens){
//        const textLink = await lien.textContent()
//        console.log(textLink)
//    }
//}
//)
test('plusierLocalisateur2',async( { page })=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForSelector('//div[@id="tbodyid"]//h4/a')
    const liens = await page.$$('//div[@id="tbodyid"]//h4/a')
    for(const lien of liens){
        const textLink = await lien.textContent()
        console.log(textLink)
    }
    
}
)
test('plusierLocalisateur3',async( { page })=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForSelector('//div[@id="tbodyid"]//h4/a')
    const liens = await page.$$('//div[@id="tbodyid"]//h4/a')
    for(const lien of liens){
        const textLink = await lien.textContent()
        const urlpage = await lien.getAttribute('href')
        console.log(textLink)
        console.log(urlpage)
    }
    
}
)