let Page = require('./basePage');
const testcases = require("../testcase/login/testcase");
const locator = require("../testcase/login/locator");

let username, password, submitBtn, alertBox;

Page.prototype.findInputAndButton = async function () {
    username = await this.findByName(locator.usernameInput);
    password = await this.findByName(locator.passwordInput);
    submitBtn = await this.findByClassName(locator.submitBtn);
    const result = await this.driver.wait(async function () {
        const usernameFlag = await username.isEnabled();
        const passwordFlag = await password.isEnabled();
        const submitBtnFlag = await submitBtn.isEnabled();
        return {
            passwordFlag,
            usernameFlag,
            submitBtnFlag,
        }
    }, 5000);
    return result;
};

Page.prototype.submitAndGetResult = async function(resultName, testcase) {
    await this.findInputAndButton();
    await this.write(username, testcase.username);
    await this.write(password, testcase.password);
    await submitBtn.click();
    alertBox = await this.findByClassName(resultName);
    return await this.driver.wait(async function () {
        return await alertBox.getText();
    }, 5000);
};

module.exports = Page;