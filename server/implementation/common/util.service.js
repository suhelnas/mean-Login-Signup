"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.sendResponse = function (err, data, res, msg, rawData) {
        return Util.sendResponseAfterLogResponse(err, data, res, msg, rawData);
    };
    Util.sendSuccessResponse = function (data, res) {
        return res.status(200).json({ data: data });
    };
    Util.sendRawSuccessResponse = function (data, res) {
        return res.status(200).send(data);
    };
    Util.sendSuccessMessageResponse = function (data, res, msg) {
        return res.status(200).json({ message: msg, data: data });
    };
    Util.sendResponseAfterLogResponse = function (err, data, res, msg, rawData) {
        if (err) {
            return Util.sendErrorResponse(err, res);
        }
        else if (msg) {
            return Util.sendSuccessMessageResponse(data, res, msg);
        }
        else if (rawData) {
            return Util.sendRawSuccessResponse(data, res);
        }
        else {
            return Util.sendSuccessResponse(data, res);
        }
    };
    Util.sendErrorResponse = function (err, res) {
        var errMsg = 'Some technical error occurred. Please contact administrator.';
        var errCode = 400;
        var errObj = null;
        try {
            errObj = JSON.parse(err.message);
            errObj.errorCode = err.errorCode;
        }
        catch (e) {
        }
        if (errObj instanceof Object) {
            errMsg = errObj.message;
            errCode = errObj.errorCode;
        }
        else {
            errCode = err.errorCode || 400;
            errMsg = err.message || 'Some technical error occurred. Please contact administrator.';
        }
        return res.status(errCode).json({ message: errMsg });
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.service.js.map