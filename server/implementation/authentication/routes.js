"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controller_1 = require("./controller/auth.controller");
var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
    }
    AuthRoutes.init = function (router) {
        router.post('/api/new/user/register', auth_controller_1.AuthController.userRegister);
        router.post('/api/verify/otp', auth_controller_1.AuthController.verifyOtp);
        router.post('/api/user/login', auth_controller_1.AuthController.userLogin);
        router.get('/api/verify', auth_controller_1.AuthController.emailVerification);
        router.post('/api/reset/password', auth_controller_1.AuthController.resetPassword);
        router.post('/api/send/reset/password/otp', auth_controller_1.AuthController.sendResetPasswordOtp);
    };
    return AuthRoutes;
}());
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=routes.js.map