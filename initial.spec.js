const {expect} = require('chai')

const {element, browser} = require('wd-interface')

describe('INITIAL', () => {
    
    it('aaaa', () => {
        /*expect(2).to.eql(1)*/
    })
})
describe('browser', () => {
    let browser_api = null
    const baseURL = 'https://weblium.com'
    const login = element('[href="https://weblium.com/login"]')
    const email = element('[name=""email]')
    const password = element('[name="password"]')

    beforeEach(async () => {
        browser_api = browser().chrome()   
    await browser_api.goTo(baseURL)
 })

 afterEach(async () => {
     await browser_api.closeBrowser()
 })
 it('send keys to element and get attribute', async () =>{
     await login.click()
     await email.sendKeys('dereva@dereva')
     await password.sendKeys('123123')
 })
})
