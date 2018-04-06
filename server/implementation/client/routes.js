"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_controller_1 = require("./controller/client.controller");
var check_login_token_1 = require("../../routes/check.login.token");
var ClientRoutes = /** @class */ (function () {
    function ClientRoutes() {
    }
    ClientRoutes.init = function (router) {
        router.post('/api/add/client', check_login_token_1.CheckLoginToken.isLoggedIn, client_controller_1.ClientController.addClient);
        router.get('/api/client', check_login_token_1.CheckLoginToken.isLoggedIn, client_controller_1.ClientController.getClietById);
        router.get('/api/list/client', check_login_token_1.CheckLoginToken.isLoggedIn, client_controller_1.ClientController.clientList);
    };
    return ClientRoutes;
}());
exports.ClientRoutes = ClientRoutes;
//# sourceMappingURL=routes.js.map