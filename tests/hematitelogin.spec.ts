import {test} from '@playwright/test'
test.beforeEach("login",async({page})=>{
await page.goto('http://quiz.hematitecorp.com/');
 await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('hemanth.thummala@changepond.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hemanth@29');
  await page.getByRole('button', { name: 'Sign In' }).click();




})
test("voucher code",async({page})=>{

  await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('FNPQO6');
  await page.getByRole('button', { name: 'submit' }).click();



})
test("logout code",async({page})=>{


  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
await page.close();

})
