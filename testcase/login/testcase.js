const account = require('../../config/login')
const locator = require("./locator")
module.exports = [
    {
        //Tên đăng nhập không tồn tại
        testcaseName: "Testcase: Tài khoản không tồn tại",
        username: "pikachu",
        password: "pikachu",
        checkName: locator.loginFailedAlert
    },
    {
        //Tên đăng nhập không tồn tại
        testcaseName: "Testcase: Tài khoản không tồn tại",
        username: "abc",
        password: "abcsdasd",
        checkName: locator.loginFailedAlert
    },
    {
        //Tên đăng nhập không tồn tại
        testcaseName: "Testcase: Tài khoản không tồn tại",
        username: "asdasdasd",
        password: "Admin@gmail1",
        checkName: locator.loginFailedAlert
    },
    {
        //Bỏ trống tên đăng nhập,
        testcaseName: "Testcase: bỏ trống tên đăng nhập",
        username: "",
        password: "abc",
        checkName: locator.missingInputAlert
    },
    {
        //Bỏ trống tên mật khẩu,
        testcaseName: "Testcase: bỏ trống tên đăng nhập",
        username: "",
        password: "abc",
        checkName: locator.missingInputAlert
    },
    {
        //Bỏ trống mật khẩu và tên đăng nhập,
        testcaseName: "Testcase: bỏ trống mật khẩu và tên đăng nhập",
        username: "",
        password: "abc",
        checkName: locator.missingInputAlert
    },
    {
        //mật khẩu không chính xác
        testcaseName: "Testcase: Sai mật khẩu",
        username: account.username,
        password: "somethingwrong",
        checkName: locator.loginFailedAlert
    },
    {
        //mật khẩu không chính xác
        testcaseName: "Testcase: Sai mật khẩu",
        username: account.username,
        password: "abcasdasdasdasdasd",
        checkName: locator.loginFailedAlert
    },
    {
        //đăng nhập thành công,
        testcaseName: "Testcase: Đăng nhập thành công",
        username: account.username,
        password: account.password,
        checkName: locator.breadcrumb
    },
    {
        //đăng nhập thành công,
        testcaseName: "Testcase: Đăng nhập thành công",
        username: "admin",
        password: "Admin@gmail1",
        checkName: locator.breadcrumb
    }
]