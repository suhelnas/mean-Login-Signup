"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.saveProduct = function (productDetail) {
        var conn = global['DbConn'];
        var product = conn.model('product');
        if (productDetail._id)
            return product.update({ _id: productDetail._id }, productDetail);
        else
            return product.create(productDetail);
    };
    ProductService.prototype.productList = function () {
        var conn = global['DbConn'];
        var product = conn.model('product');
        var promise = product.find();
        return promise;
    };
    ProductService.prototype.productById = function (productId) {
        var conn = global['DbConn'];
        var product = conn.model('product');
        var promise = product.findById(productId);
        return promise;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map