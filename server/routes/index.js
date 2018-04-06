"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../implementation/authentication/routes");
var routes_2 = require("../implementation/product/routes");
var routes_3 = require("../implementation/client/routes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        routes_1.AuthRoutes.init(router);
        routes_2.ProductRoutes.init(router);
        routes_3.ClientRoutes.init(router);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map