"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ProductModel = /** @class */ (function () {
    function ProductModel(dbConn) {
        var productSchema = new mongoose.Schema({
            productname: {
                type: String,
                required: true
            },
            hostedon: {
                type: String,
                required: true
            },
            producturl: {
                type: String,
                required: true
            },
            serverip: {
                type: String,
                required: true
            },
            servercredential: {
                type: String,
                required: true
            },
            module: [{
                    name: {
                        type: String
                    },
                    teamworked: {
                        type: String
                    },
                    teamworking: {
                        type: String
                    },
                    lastupdated: {
                        type: Date
                    },
                    submodulename: [{
                            name: {
                                type: String
                            },
                            teamworked: {
                                type: String
                            },
                            teamworking: {
                                type: String
                            },
                            lastupdated: {
                                type: Date
                            },
                        }]
                }]
        });
        ProductModel.productModel = dbConn.model('product', productSchema);
    }
    ProductModel.productmodel = function () {
        return ProductModel.productModel;
    };
    ProductModel.productModel = null;
    return ProductModel;
}());
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.model.js.map