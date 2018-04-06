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
var http_1 = require("@angular/common/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        this.messageSource = new BehaviorSubject_1.BehaviorSubject("");
        this.currentMessage = this.messageSource.asObservable();
    }
    AuthService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    AuthService.prototype.userLogin = function (loginParameters) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.post('/api/user/login', loginParameters).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.userRegister = function (registerParameters) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.post('/api/new/user/register', registerParameters).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AuthService.prototype.sendResetPasswordOtp = function (resetParameters) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.post('/api/send/reset/password/otp', resetParameters).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AuthService.prototype.verifyOtp = function (otpparameters) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.post('/api/verify/otp', otpparameters).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AuthService.prototype.resetPassword = function (passparameters) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._http.post('/api/reset/password', passparameters).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map