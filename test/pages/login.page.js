class LoginPage{

    get usernameTextbox(){
        return $('#user-name')
    }
    get passwordTextbox(){
        return $('#password')
    }
    get loginButton(){
        return $('#login-button')
    }
    get loginElement(){
        return $('#shopping_cart_container')
    }

    async login(username, password){

        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()
    }

    async checkElement(selector) {
        const elem = await $(selector);
        await expect(elem).toBeDisplayed();
    }
}
module.exports = new LoginPage()