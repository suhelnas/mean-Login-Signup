"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ClientModel = /** @class */ (function () {
    function ClientModel(dbConn) {
        var clientschema = new mongoose.Schema({
            _id: {
                type: mongoose.Schema.ObjectId,
                auto: true,
                autoIncrement: true
            },
            clientname: {
                type: String
            },
            clientcompany: {
                type: String
            },
            clientAddress: {
                type: String
            },
            clientEmail: {
                type: String
            },
            mobile: {
                type: Number
            },
            staff: [{
                    staffname: {
                        type: String
                    },
                    department: {
                        type: String
                    },
                    designation: {
                        type: String
                    },
                    mobile: {
                        type: Number
                    },
                    Address: {
                        type: String
                    }
                }]
        });
        ClientModel.clientModel = dbConn.model('client', clientschema);
    }
    ClientModel.clientmodel = function () {
        return ClientModel.clientModel;
    };
    ClientModel.clientModel = null;
    return ClientModel;
}());
exports.ClientModel = ClientModel;
//# sourceMappingURL=client.model.js.map