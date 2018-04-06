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
var OtpComponent = /** @class */ (function () {
    function OtpComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.input = {
            otp: null,
            email: null
        };
    }
    OtpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.currentMessage.subscribe(function (message) { return _this.input.email = message; });
    };
    OtpComponent.prototype.sendOtp = function () {
        var that = this;
        var promise = this._authService.verifyOtp(this.input);
        promise.then(function (data) {
            if (data["verified"])
                that._router.navigate(['/reset/password']);
            else
                alert("Otp is incorrect");
        });
    };
    OtpComponent = __decorate([
        core_1.Component({
            selector: 'otp',
            templateUrl: './otp.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], OtpComponent);
    return OtpComponent;
}());
exports.OtpComponent = OtpComponent;
//# sourceMappingURL=otp.component.js.map