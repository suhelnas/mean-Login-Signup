"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UserModel = /** @class */ (function () {
    function UserModel(dbConn) {
        var userSchema = new mongoose.Schema({
            username: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            verified: {
                type: Boolean,
                required: true,
                default: false
            },
            resettoken: {
                type: String
            },
            timestamp: {
                type: String,
                required: true
            },
            profile: {
                mobile: Number,
                otp: String,
                fullname: String,
                gender: Number
            },
            status: {}
        });
        UserModel.userModel = dbConn.model('user', userSchema);
    }
    UserModel.usermodel = function () {
        return UserModel.userModel;
    };
    UserModel.userModel = null;
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=register.model.js.map