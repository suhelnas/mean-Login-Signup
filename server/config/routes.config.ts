import * as express from 'express';
import * as bodyParser from 'body-parser'
require('dotenv').config()
export class RoutesConfig{
  static init(application:express.Application){
    application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
    application.use(bodyParser.json({ limit: '1000mb' }));
    }
}
