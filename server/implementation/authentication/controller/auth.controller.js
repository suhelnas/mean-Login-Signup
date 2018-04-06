"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("../services/auth.service");
var util_service_1 = require("../../common/util.service");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.userRegister = function (req, res) {
        var authService = new auth_service_1.AuthService();
        var promise = authService.register(req.body, req.get('host'));
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    AuthController.userLogin = function (req, res) {
        var authService = new auth_service_1.AuthService();
        var promise = authService.login(req.body);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            console.log(data);
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    AuthController.emailVerification = function (req, res) {
        var authService = new auth_service_1.AuthService();
        var promise = authService.mailVerification(req.query.code, req.query.email);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    AuthController.sendResetPasswordOtp = function (req, res) {
        var authService = new auth_service_1.AuthService();
        var promise = authService.sendResetPasswordOtp(req.body.email, req.get('host'));
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    AuthController.verifyOtp = function (req, res) {
        var authService = new auth_service_1.AuthService();
        var promise = authService.verifyOtp(req.body.email, req.body.otp);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    AuthController.resetPassword = function (req, res) {
        var authService = new auth_service_1.AuthService();
        var promise = authService.resetPassword(req.body.email, req.body.password);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map