const LoginPage = require('../pages/login.page')

describe('Test Task QA', () => {

    it('Saving the card after logout ', async () => {

        browser.url('https://www.saucedemo.com/')

        await LoginPage.login('standard_user', 'secret_sauce')

        await $('#add-to-cart-sauce-labs-backpack').waitForDisplayed()
        await $('#add-to-cart-sauce-labs-backpack').click()

        await $('#react-burger-menu-btn').click()

        await $('#logout_sidebar_link').click()

        await LoginPage.login('standard_user', 'secret_sauce')

        await $('#shopping_cart_container').click()

        const itemLink = await $('#item_4_title_link')
        await expect(itemLink).toBeDisplayed()
        

    })
})