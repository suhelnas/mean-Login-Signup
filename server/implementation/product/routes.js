"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_controller_1 = require("./controller/product.controller");
var check_login_token_1 = require("../../routes/check.login.token");
var ProductRoutes = /** @class */ (function () {
    function ProductRoutes() {
    }
    ProductRoutes.init = function (router) {
        router.post('/api/add/product', check_login_token_1.CheckLoginToken.isLoggedIn, product_controller_1.ProductController.addProduct);
        router.get('/api/list/product', check_login_token_1.CheckLoginToken.isLoggedIn, product_controller_1.ProductController.getProductList);
        router.get('/api/product', check_login_token_1.CheckLoginToken.isLoggedIn, product_controller_1.ProductController.getProductById);
    };
    return ProductRoutes;
}());
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=routes.js.map