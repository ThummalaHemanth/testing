import { test, expect,chromium,Page,Browser,Locator } from '@playwright/test';
test("login test",async ()=>{
const browser : Browser = await chromium.launch({headless:false});
const page :Page =await browser.newPage();
await page.goto('http://quiz-fe.hematitecorp.com/');
const email :Locator=await page.locator('#email');
const password : Locator=await page.locator("#password");
const submitButton:Locator=await page.locator("[type='submit']");
await email.fill('hemanth.thummala@changepond.com');
await password.fill("Hemanth@29")
await submitButton.click();
 
    const title = await page.title();
    console.log("Home Page Title", title);
    await page.screenshot({path : 'VocherCode.png'});
 
    expect(title).toEqual("Quiz App");
 
    // browser.close();




})
