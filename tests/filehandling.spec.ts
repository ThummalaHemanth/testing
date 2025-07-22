import {test,expect} from'@playwright/test'
test("file handling",async({page})=>{
await page.goto('http://127.0.0.1:5500/assertion.html');
await page.pause();
const filepath:string = "tests/Task.docx"
await page.setInputFiles("input[type='file']",filepath)
await page.locator('button[type="button"]').click();

 //test case file for downloading
 
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a#downloadbutton')
    ]);
 
    //code to save file on disk
 
    const downloadFilePath = await download.path();
    console.log("Downloading File Path",downloadFilePath);


})