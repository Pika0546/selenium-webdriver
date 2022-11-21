const { describe, it, after, before } = require('mocha');
const Page = require('../lib/pimPage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const deleteEmployeeLocator = require('../testcase/deleteEmployee/locator')
const deleteEmployeeTestcase = require('../testcase/deleteEmployee/testcase.json')
const account = require('../config/login')

chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('Orange delete employee test', async function () {
            this.timeout(50000);
            let driver, page;

            beforeEach (async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('http://localhost/orangehrm-5.1/web/index.php/auth/login');
                await page.login(account.username, account.password);
            });

            afterEach (async () => {
                await page.quit();
            });
            const n = deleteEmployeeTestcase.length;
            for(let i = 0 ; i< n ;i++){
                it ("Xóa nhân viên: " + deleteEmployeeTestcase[i], async () => {
                    const deleteResult = await page.deleteEmployee(deleteEmployeeTestcase[i]);
                    expect(deleteResult.length).to.be.above(1);
                });
            }
        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();