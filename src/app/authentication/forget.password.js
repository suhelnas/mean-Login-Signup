"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./services/auth.service");
var router_1 = require("@angular/router");
var ForgetPassword = /** @class */ (function () {
    function ForgetPassword(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.input = {
            email: null
        };
    }
    ForgetPassword.prototype.ngOnInit = function () {
        var that = this;
        that._authService.currentMessage.subscribe(function (message) { return that.input.email = message; });
    };
    ForgetPassword.prototype.sendResetLink = function () {
        var that = this;
        var promise = this._authService.sendResetPasswordOtp(this.input);
        promise.then(function (result) {
            if (result["success"]) {
                alert(result["message"]);
                that._authService.changeMessage(that.input.email);
                that._router.navigate(['/verify/otp']);
            }
            else
                alert(result["message"]);
        });
    };
    ForgetPassword = __decorate([
        core_1.Component({
            selector: 'forget-password',
            templateUrl: './forget.password.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], ForgetPassword);
    return ForgetPassword;
}());
exports.ForgetPassword = ForgetPassword;
//# sourceMappingURL=forget.password.js.map