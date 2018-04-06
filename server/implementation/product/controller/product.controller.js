"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_service_1 = require("../services/product.service");
var util_service_1 = require("../../common/util.service");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.addProduct = function (req, res) {
        var productService = new product_service_1.ProductService();
        var promise = productService.saveProduct(req.body);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    ProductController.getProductList = function (req, res) {
        var productService = new product_service_1.ProductService();
        var promise = productService.productList();
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    ProductController.getProductById = function (req, res) {
        var productService = new product_service_1.ProductService();
        var promise = productService.productById(req.query.id);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map