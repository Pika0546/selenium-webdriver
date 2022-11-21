let Page = require('./basePage');
const locator = require("../testcase/deleteEmployee/locator");
const locatorLogin = require("../testcase/login/locator");

let username, password, submitBtn, alertBox;
let idCell, deleteButtonCell, confirmButton, successAlert, sortButton, ascendingButton;

Page.prototype.login = async function (usernameValue, passwordValue) {
    username = await this.findByName(locatorLogin.usernameInput);
    password = await this.findByName(locatorLogin.passwordInput);
    submitBtn = await this.findByClassName(locatorLogin.submitBtn);
    await this.write(username, usernameValue );
    await this.write(password, passwordValue);
    await submitBtn.click();
};

Page.prototype.deleteEmployee = async function(id) {
    sortButton = await this.findByClassName(locator.sortButton);
    await sortButton.click();
    ascendingButton = await this.findByClassName(locator.ascendingButton)
    await ascendingButton.click()
    idCell = await this.findMultipleElement(locator.cssSelector)
    deleteButtonCell = await this.findMultipleElement(locator.deleteBtnSelector);
    const n = idCell.length;
    for(let i = 0; i < n;i++){
        const cellContent = await idCell[i].getText()
        if(cellContent == id){
            try {
                deleteButtonCell[i].click();
                confirmButton = await this.findByClassName(locator.confirmButton);
                await confirmButton.click();
                successAlert = await this.findByClassName(locator.successAlert);
                return await this.driver.wait(async function () {
                    return successAlert ? await successAlert.getText() : "";
                }, 15000);
            } catch (error) {
                console.log(error);
            }
        }
    }
    return "";
};

module.exports = Page;