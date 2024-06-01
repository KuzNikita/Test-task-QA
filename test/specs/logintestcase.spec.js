
describe('Test Task QA', () => {

    it('Valid Login', async () => {

        browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        const elem = await $('#shopping_cart_container')
        await expect(elem).toBeDisplayed()
    })
})

describe('Test Task QA', () => {

    it('Login with invalid password', async () => {

        browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('test_password')
        await $('#login-button').click()

        const errorElement = await $('[data-test="error"]')
        await expect(errorElement).toBeDisplayed()

        const errorMessage = await errorElement.getText()
        await expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service')

    })
})

describe('Test Task QA', () => {

    it('Login with invalid login', async () => {

        browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standarD_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        const errorElement = await $('[data-test="error"]')
        await expect(errorElement).toBeDisplayed()

        const errorMessage = await errorElement.getText()
        await expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service')

    })
})

describe('Test Task QA', () => {

    it('Logout', async () => {

        browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await $('#react-burger-menu-btn').click()
        await $('#logout_sidebar_link').click()

        // const elem = await $('#shopping_cart_container')
        // await expect(elem).toBeDisplayed()
    })
})