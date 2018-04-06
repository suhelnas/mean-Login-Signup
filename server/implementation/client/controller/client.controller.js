"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_service_1 = require("../services/client.service");
var util_service_1 = require("../../common/util.service");
var ClientController = /** @class */ (function () {
    function ClientController() {
    }
    ClientController.addClient = function (req, res) {
        var clientService = new client_service_1.ClientService();
        var promise = clientService.saveClient(req.body);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    ClientController.getClietById = function (req, res) {
        var clientService = new client_service_1.ClientService();
        var promise = clientService.clientById(req.query.id);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    ClientController.clientList = function (req, res) {
        var clientService = new client_service_1.ClientService();
        var promise = clientService.clientList();
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    return ClientController;
}());
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map