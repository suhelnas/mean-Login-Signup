"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DbConfig = /** @class */ (function () {
    function DbConfig() {
    }
    DbConfig.getDbDefaultCallbackHandle = function () {
        return function (promise, cb) {
            if (cb == null)
                return promise;
            return promise.then(function (data) {
                cb(null, data);
            }).catch(function (err) {
                cb(err);
            });
        };
    };
    DbConfig.initMariaDb = function (cb) {
        if (DbConfig.dbConn) {
            console.log('Database is already initialized ...');
            return cb(null);
        }
        DbConfig.dbConn = mongoose.createConnection('mongodb://localhost/test', function (err, res) {
            if (err) {
                return cb(err);
            }
            return cb(null);
        });
    };
    DbConfig.getDbConnection = function () {
        return DbConfig.dbConn;
    };
    return DbConfig;
}());
exports.DbConfig = DbConfig;
//# sourceMappingURL=db.config.js.map