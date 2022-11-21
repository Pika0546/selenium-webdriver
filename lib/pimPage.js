let Page = require('./basePage');
const locator = require("../testcase/login/locator");

let username, password, submitBtn, alertBox;

Page.prototype.login = async function (usernameValue, passwordValue) {
    username = await this.findByName(locator.usernameInput);
    password = await this.findByName(locator.passwordInput);
    submitBtn = await this.findByClassName(locator.submitBtn);
    await this.write(username,usernameValue );
    await this.write(password, passwordValue);
    await submitBtn.click();
};

Page.prototype.deleteEmployee = async function(id) {
    await submitBtn.click();
    alertBox = await this.findByClassName(resultName);
    return await this.driver.wait(async function () {
        return await alertBox.getText();
    }, 5000);
};

module.exports = Page;