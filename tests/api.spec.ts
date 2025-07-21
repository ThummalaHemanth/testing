import { test, expect, Browser, chromium, BrowserContext, Page, Locator } from '@playwright/test';
    test("api",async()=>{
       const browser:Browser= await chromium.launch({headless:false,channel:'chrome'})
       const browercontext_1: BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();

 
   

  
   const userid:string='hemanth.thummala@changepond.com'
   const passsword:string='Hemanth@29';
   const authstring="Basic"+(userid+":"+passsword)
   page.setExtraHTTPHeaders({Authorization:authstring});
   await page.goto("http://quiz.hematitecorp.com/");
    })