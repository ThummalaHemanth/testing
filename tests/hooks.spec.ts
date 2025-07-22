import{test,expect} from'@playwright/test'
test.beforeEach("hooks",async()=>{
    console.log("gm")
})
test.afterEach("hooks2",async()=>{
    console.log("had BF")
})
test("hooks1",async()=>{
    console.log("sridhar")
})
