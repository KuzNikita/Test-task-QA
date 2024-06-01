const LoginPage = require('../pages/login.page')

describe('Test Task QA', () => {
    it('Footer Links ', async () => {
        await browser.url('https://www.saucedemo.com/')

        await LoginPage.login('standard_user', 'secret_sauce')

        let currentWindowHandle = await browser.getWindowHandle()
        if (!currentWindowHandle) {
            throw new Error('Unable to get current window handle')
        }

        const twitterIcon = $('//a[@href="https://twitter.com/saucelabs"]')
        await twitterIcon.click()

        await browser.pause(2000)
        const windowHandles = await browser.getWindowHandles()
        await browser.switchToWindow(windowHandles[1])
        await browser.closeWindow()

        await browser.switchToWindow(currentWindowHandle)

        const facebookIcon = $('//a[@href="https://www.facebook.com/saucelabs"]')
        await facebookIcon.click()

        await browser.pause(2000)
        const facebookWindowHandles = await browser.getWindowHandles()
        await browser.switchToWindow(facebookWindowHandles[1])
        await browser.closeWindow()

        await browser.switchToWindow(currentWindowHandle)

        const linkedinIcon = $('//a[@href="https://www.linkedin.com/company/sauce-labs/"]')
        await linkedinIcon.click()

        await browser.pause(2000)
        const linkedinWindowHandles = await browser.getWindowHandles()
        await browser.switchToWindow(linkedinWindowHandles[1])
        await browser.closeWindow()

        await browser.switchToWindow(currentWindowHandle)
    })
})