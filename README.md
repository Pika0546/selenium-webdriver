# Cách chạy project
1. ```yarn install``` hoặc ```npm install```
2. ```yarn test``` hoặc ```npm run test```


# Các chức năng được test:

## Xóa nhân viên
Testcase: dữ liệu là một file json chứa một mảng ID của 10 nhân viên
```json
[
    "000001",
    "000002",
    "000003",
    "000004",
    "000005",
    "000006",
    "000007",
    "000008",
    "000009",
    "000010"
]
```
Các testcase này được pass khi có một thông báo success xuất hiện
## Đăng nhập
Testcase:
```js
 {
        //Tên đăng nhập không tồn tại
        testcaseName: "Testcase: Tài khoản không tồn tại",
        username: "pikachu",
        password: "pikachu",
        checkName: locator.loginFailedAlert
        //Pass khi: có thông báo đăng nhập thất bại
    },
    {
        //Tên đăng nhập không tồn tại
        testcaseName: "Testcase: Tài khoản không tồn tại",
        username: "abc",
        password: "abcsdasd",
        checkName: locator.loginFailedAlert
        //Pass khi: có thông báo đăng nhập thất bại

    },
    {
        //Tên đăng nhập không tồn tại
        testcaseName: "Testcase: Tài khoản không tồn tại",
        username: "asdasdasd",
        password: "Admin@gmail1",
        checkName: locator.loginFailedAlert
        //Pass khi: có thông báo đăng nhập thất bại
    },
    {
        //Bỏ trống tên đăng nhập,
        testcaseName: "Testcase: bỏ trống tên đăng nhập",
        username: "",
        password: "abc",
        checkName: locator.missingInputAlert
        //Pass khi: có thông báo username không được bỏ trống

    },
    {
        //Bỏ trống tên mật khẩu,
        testcaseName: "Testcase: bỏ trống tên đăng nhập",
        username: "",
        password: "abc",
        checkName: locator.missingInputAlert
        //Pass khi: có thông báo password không được bỏ trống
    },
    {
        //Bỏ trống tên đăng nhập,
        testcaseName: "Testcase: bỏ trống tên đăng nhập",
        username: "",
        password: "abc",
        checkName: locator.missingInputAlert
        //Pass khi: có thông báo username không được bỏ trống
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
        //Pass khi: có thông báo đăng nhập thất bại
    },
    {
        //đăng nhập thành công,
        testcaseName: "Testcase: Đăng nhập thành công",
        username: account.username,
        password: account.password,
        checkName: locator.breadcrumb
        //Pass khi: trang PIM có breadcrumb xuất hiện
    },
    {
       //Tên đăng nhập không tồn tại
        testcaseName: "Testcase: Tài khoản không tồn tại",
        username: "admin",
        password: "Admin@gmail1",
        checkName: locator.loginFailedAlert
        //Pass khi: có thông báo đăng nhập thất bại
    }
```

