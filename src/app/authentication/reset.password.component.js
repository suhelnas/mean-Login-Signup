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
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.input = {
            email: null,
            password: null
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var that = this;
        that._authService.currentMessage.subscribe(function (message) { return that.input.email = message; });
    };
    ResetPasswordComponent.prototype.reset = function () {
        var that = this;
        var regex = /^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
        if (!this.input.password.match(regex)) {
            alert("Password must contain one capital letter,one small letter,one number,one special charcter and length atleast 8");
            return;
        }
        if (this.input.password == this.password) {
            var promise = this._authService.resetPassword(this.input);
            promise.then(function (data) {
                that._router.navigate(['/login']);
            });
        }
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'reset-password',
            templateUrl: './reset.password.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset.password.component.js.map