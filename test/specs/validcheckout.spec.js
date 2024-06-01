const LoginPage = require('../pages/login.page')

describe('Test Task QA', () => {
    
    it('Valid Checkout', async () => {
        await browser.url('https://www.saucedemo.com/')

        await LoginPage.login('standard_user', 'secret_sauce')

        await $('#add-to-cart-sauce-labs-backpack').waitForDisplayed()
        await $('#add-to-cart-sauce-labs-backpack').click()
        const elementSelector = 'span.shopping_cart_badge[data-test="shopping-cart-badge"]'
        const isElementExisting = await $(elementSelector).isExisting()

        await $('#shopping_cart_container').click()

        await $('#checkout').click()

        await $('#first-name').setValue('Test')
        await $('#last-name').setValue('User')
        await $('#postal-code').setValue('12345')
        await $('#continue').click()

        const itemLink = await $('#item_4_title_link')
        await expect(itemLink).toBeDisplayed()
        await $('#finish').click()

        const completeHeader = $('h2.complete-header[data-test="complete-header"]')
        await completeHeader.waitForDisplayed()
        const completeHeaderText = await completeHeader.getText()
        expect(completeHeaderText).toBe('Thank you for your order!')

        await $('#back-to-products').click()
        const currentUrl = await browser.getUrl()
        expect(currentUrl).toBe('https://www.saucedemo.com/inventory.html')
        const cartBadgeAfterOrder = $('span.shopping_cart_badge[data-test="shopping-cart-badge"]')
        const isCartBadgeNotExisting = await cartBadgeAfterOrder.isExisting()
        expect(isCartBadgeNotExisting).toBe(false)

    })
})