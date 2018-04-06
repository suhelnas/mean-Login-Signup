"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var register_component_1 = require("./authentication/register.component");
var login_component_1 = require("./authentication/login.component");
var forget_password_1 = require("./authentication/forget.password");
var otp_component_1 = require("./authentication/otp.component");
var reset_password_component_1 = require("./authentication/reset.password.component");
var add_product_component_1 = require("./product/add.product.component");
var add_user_component_1 = require("./user/add.user.component");
var before_login_layout_1 = require("./layouts/before.login.layout");
var after_login_layout_1 = require("./layouts/after.login.layout");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var add_client_component_1 = require("./client/add.client.component");
exports.ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '', component: before_login_layout_1.BeforeLoginLayout,
        children: [
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'register', component: register_component_1.RegisterComponent },
            { path: 'forget/password', component: forget_password_1.ForgetPassword },
            { path: 'verify/otp', component: otp_component_1.OtpComponent },
            { path: 'reset/password', component: reset_password_component_1.ResetPasswordComponent }
        ]
    },
    { path: '', component: after_login_layout_1.AfterLoginLayout,
        children: [
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'add/product', component: add_product_component_1.AddProductComponent },
            { path: 'add/user', component: add_user_component_1.AddUserComponent },
            { path: 'add/client', component: add_client_component_1.AddClientComponent }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map