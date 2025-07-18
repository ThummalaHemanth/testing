import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// test("check title",async({page})=>{
//   await page.goto('https://www.microsoft.com/en-in/');
//   await expect(page).toHaveTitle(/google/);
// });
 

test("check addition",async({page})=>{
  await page.goto('file:///C:/Javascript/first.html');
  await page.fill('#Text1','9');
    await page.fill('#Text2','9');
    await page.click('#add')
    const result=await page.textContent("#res")
    await expect(result?.trim()).toBe('18')
})
test("check sub",async({page})=>{
  await page.goto('file:///C:/Javascript/first.html');
  await page.fill('#Text1','9');
    await page.fill('#Text2','9');
    await page.click('#sub')
    const result=await page.textContent("#res")
    await expect(result?.trim()).toBe('0')
})
test("check mul",async({page})=>{
  await page.goto('file:///C:/Javascript/first.html');
  await page.fill('#Text1','9');
    await page.fill('#Text2','9');
    await page.click('#mul')
    const result=await page.textContent("#res")
    await expect(result?.trim()).toBe('81')
})
test("check div",async({page})=>{
  await page.goto('file:///C:/Javascript/first.html');
  await page.fill('#Text1','9');
    await page.fill('#Text2','9');
    await page.click('#div')
    const result=await page.textContent("#res")
    await expect(result?.trim()).toBe('1')
})



