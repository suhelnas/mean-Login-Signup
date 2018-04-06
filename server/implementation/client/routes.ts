import * as express from 'express'
import {ClientController} from './controller/client.controller';
import {CheckLoginToken} from '../../routes/check.login.token';
export class ClientRoutes {
  static init(router: express.Router) {
   router.post('/api/add/client',CheckLoginToken.isLoggedIn,ClientController.addClient);
    router.get('/api/client',CheckLoginToken.isLoggedIn,ClientController.getClietById);
    router.get('/api/list/client',CheckLoginToken.isLoggedIn,ClientController.clientList);
  }
}
