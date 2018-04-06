import * as http from 'http';
import * as express from 'express';
import * as mongoose  from 'mongoose';
import {RoutesConfig} from './config/routes.config';
import {Routes} from './routes';
import {DbConfig} from './config/db.config';
import {SyncDb} from './database/sync.db';

let app = express();
global['DbConn'] = mongoose.createConnection('mongodb://localhost/test',function (err,res) {
  if(err) {
    console.log(err)
    process.exit(0);
  }
    console.log("we are connected");
    global['DbConn'].DefaultCallbackHandle =DbConfig.getDbDefaultCallbackHandle();
    SyncDb.init(global['DbConn']);
    RoutesConfig.init(app);
    Routes.init(app,express.Router());
    http.createServer(app).listen(process.env.PORT|| 8080,function () {
      console.log("server listening on 8080")
    })
})




