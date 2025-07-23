import { test } from '@playwright/test';
test("api",async({page})=>{
 await page.route("api users",(route)=>{
    route.fulfill({
        status:200,
        contentType:'application/json',
        body:JSON.stringify([
            {id:1,name:"sridhar"},
             {id:2,name:"likith"}, 

        ]),
    });
 });

 await page.goto('file:///C:/typescript/output.html')
})