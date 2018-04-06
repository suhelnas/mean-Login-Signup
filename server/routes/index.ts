import * as express from 'express';
import * as path from 'path'
import {AuthRoutes} from '../implementation/authentication/routes';
import {ProductRoutes} from '../implementation/product/routes';
import {ClientRoutes} from '../implementation/client/routes';
import {CheckLoginToken} from './check.login.token';


export class Routes{

  static init(app:express.Application ,router:any){
    AuthRoutes.init(router);
    ProductRoutes.init(router);
    ClientRoutes.init(router);
    app.use('/', router);
  }
}
