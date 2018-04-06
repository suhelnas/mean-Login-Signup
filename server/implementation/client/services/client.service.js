"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientService = /** @class */ (function () {
    function ClientService() {
    }
    ClientService.prototype.saveClient = function (clientdetail) {
        var conn = global['DbConn'];
        var product = conn.model('client');
        if (clientdetail._id)
            return product.update({ _id: clientdetail._id }, clientdetail);
        else
            return product.create(clientdetail);
    };
    ClientService.prototype.clientById = function (clientId) {
        var conn = global['DbConn'];
        var product = conn.model('client');
        var promise = product.findById(clientId);
        return promise;
    };
    ClientService.prototype.clientList = function () {
        return global['DbConn'].model('product').find();
    };
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map