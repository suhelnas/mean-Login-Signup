"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var forms_1 = require("@angular/forms");
var forget_password_1 = require("./forget.password");
var otp_component_1 = require("./otp.component");
var reset_password_component_1 = require("./reset.password.component");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                forget_password_1.ForgetPassword,
                otp_component_1.OtpComponent,
                reset_password_component_1.ResetPasswordComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule
            ],
            exports: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                forget_password_1.ForgetPassword,
                otp_component_1.OtpComponent,
                reset_password_component_1.ResetPasswordComponent
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map