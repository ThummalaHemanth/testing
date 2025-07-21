import { test, expect, chromium, Page, Browser, Locator } from '@playwright/test';
test("login test", async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('http://quiz-fe.hematitecorp.com/');
    const email: Locator = await page.locator('#email');
    const password: Locator = await page.locator("#password");
    const submitButton: Locator = await page.locator("[type='submit']");
    await email.fill('hemanth.thummala@changepond.com');
    await password.fill("Hemanth@29")
    await submitButton.click();

    const title = await page.title();
    console.log("Home Page Title", title);
    await page.screenshot({ path: 'VocherCode.png' });

    expect(title).toEqual("Quiz App");

    // browser.close();




})
test("login", async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/form.html');
    const fname: Locator = await page.locator('#txt1');
    await fname.fill('hemanth');
    const password: Locator = await page.locator("#txt2")
    await password.fill("none");
    //class selector
    const email: Locator = await page.locator('.txtemail')
    await email.fill("987654@gmail.com")
    const contact: Locator = await page.locator('.txtcontact')
    await contact.fill("987654")
    //text selector
    const heading: Locator = await page.locator("text=Registration Form");
    const headingExist = await heading.isEnabled()

    console.log(headingExist)
    //css selector
    const address: Locator = await page.locator("css=input#txtadress");
   await address.fill("nellore");
    const pin: Locator = await page.locator("css=input#txtpincode");
    await pin.fill("8598764");

    // xpath
    const email1:Locator=await page.locator("xpath=//input[@name='myemail']")
   await email1.fill("dummy@")
    const checkbox:Locator=await page.locator("xpath=//input[@name='term']")
    const my=await checkbox.isEnabled()
    console.log(!my)

});
