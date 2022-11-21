const { describe, it, after, before } = require('mocha');
const Page = require('../lib/homePage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const loginLocator = require('../testcase/login/locator')
const loginTestcases = require('../testcase/login/testcase')

chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('Google search automated testing', async function () {
            this.timeout(50000);
            let driver, page;

            beforeEach (async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('http://localhost/orangehrm-5.1/web/index.php/auth/login');
            });

            afterEach (async () => {
                await page.quit();
            });
            const n = loginTestcases.length;
            for(let i = 0 ; i< n ;i++){
                it (loginTestcases[i].testcaseName, async () => {
                    const result = await page.findInputAndButton();
                    const loginResult = await page.submitAndGetResult(loginTestcases[i].checkName, loginTestcases[i]);
                    expect(loginResult.length).to.be.above(1);
                });
            }
        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();