const LoginPage = require('../pages/login.page')

describe('Sorting', () => {

    it('Valid Login', async () => {

        await browser.url('https://www.saucedemo.com/')

        await LoginPage.login('standard_user', 'secret_sauce')

        // Перевірка low to high сортування

        let selectButton = await $('.product_sort_container')
        await selectButton.click()

        let loHiOption = await $('option[value="lohi"]')
        await loHiOption.click()

        await browser.pause(500)

        let pricesLoHi = await $$('.inventory_item_price')

        for (let i = 0; i < pricesLoHi.length - 1; i++) {
            const currentPrice = parseFloat((await pricesLoHi[i].getText()).replace('$', ''))
            const nextPrice = parseFloat((await pricesLoHi[i + 1].getText()).replace('$', ''))
            expect(currentPrice).toBeLessThanOrEqual(nextPrice)
        }

        // Перевірка high to low сортування
        
        selectButton = await $('.product_sort_container')
        await selectButton.click()

        const hiLoOption = await $('option[value="hilo"]')
        await hiLoOption.click()

        await browser.pause(500)

        const pricesHiLo = await $$('.inventory_item_price')

        for (let i = 0; i < pricesHiLo.length - 1; i++) {
            const currentPrice = parseFloat((await pricesHiLo[i].getText()).replace('$', ''))
            const nextPrice = parseFloat((await pricesHiLo[i + 1].getText()).replace('$', ''))
            expect(currentPrice).toBeGreaterThanOrEqual(nextPrice)
        }
        
        // Перевірка A-Z сортування

        selectButton = await $('.product_sort_container')
        await selectButton.click()

        const azOption = await $('option[value="az"]')
        await azOption.click()

        await browser.pause(500)

        const namesAZ = await $$('.inventory_item_name')

        for (let i = 0; i < namesAZ.length - 1; i++) {
            const currentName = (await namesAZ[i].getText()).toLowerCase()
            const nextName = (await namesAZ[i + 1].getText()).toLowerCase()
            expect(currentName.localeCompare(nextName)).toBeLessThanOrEqual(0)
        }

        // Перевірка Z-A сортування

        selectButton = await $('.product_sort_container')
        await selectButton.click()
        
        const zaOption = await $('option[value="za"]')
        await zaOption.click()

        await browser.pause(500)

        const namesZA = await $$('.inventory_item_name')

        for (let i = 0; i < namesZA.length - 1; i++) {
            const currentName = (await namesZA[i].getText()).toLowerCase()
            const nextName = (await namesZA[i + 1].getText()).toLowerCase()
            expect(currentName.localeCompare(nextName)).toBeGreaterThanOrEqual(0)
        }
    })

})