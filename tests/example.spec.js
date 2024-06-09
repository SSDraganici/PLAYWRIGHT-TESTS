
const { test, expect } = require('@playwright/test');

test('new test grinfer' , async ({page})=>{
  await page.goto('https://www.google.ca/')
  await page.locator('img#hplogo').click()
  //await page.
 //page.click('.oxd-button')

})