"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var express = require("express");
var mongoose = require("mongoose");
var routes_config_1 = require("./config/routes.config");
var routes_1 = require("./routes");
var db_config_1 = require("./config/db.config");
var sync_db_1 = require("./database/sync.db");
var app = express();
global['DbConn'] = mongoose.createConnection('mongodb://localhost/test', function (err, res) {
    if (err) {
        console.log(err);
        process.exit(0);
    }
    console.log("we are connected");
    global['DbConn'].DefaultCallbackHandle = db_config_1.DbConfig.getDbDefaultCallbackHandle();
    sync_db_1.SyncDb.init(global['DbConn']);
    routes_config_1.RoutesConfig.init(app);
    routes_1.Routes.init(app, express.Router());
    http.createServer(app).listen(process.env.PORT || 8080, function () {
        console.log("server listening on 8080");
    });
});
//# sourceMappingURL=server.js.map