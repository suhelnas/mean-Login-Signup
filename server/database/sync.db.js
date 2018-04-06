"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_model_1 = require("../implementation/product/models/product.model");
var register_model_1 = require("../implementation/authentication/models/register.model");
var client_model_1 = require("../implementation/client/models/client.model");
var SyncDb = /** @class */ (function () {
    function SyncDb() {
    }
    SyncDb.init = function (dbConn) {
        new register_model_1.UserModel(dbConn);
        new product_model_1.ProductModel(dbConn);
        new client_model_1.ClientModel(dbConn);
    };
    return SyncDb;
}());
exports.SyncDb = SyncDb;
//# sourceMappingURL=sync.db.js.map