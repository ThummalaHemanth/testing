import{test}from '@playwright/test'
import { loginPage } from './loginpage'
import { use } from './credentials';
for(let user of use){
test(`${user.strmessage}`,async({page})=>{
   const lp= new loginPage(page);
   await lp.goto();
    await lp.login(user.username, user.password);
   
})
}
