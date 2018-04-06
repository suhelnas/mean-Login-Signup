import * as express from 'express'
import {ProductController} from './controller/product.controller';
import {CheckLoginToken} from '../../routes/check.login.token';
export class ProductRoutes{
  static init(router: express.Router){
    router.post('/api/add/product',CheckLoginToken.isLoggedIn,ProductController.addProduct);
    router.get('/api/list/product',CheckLoginToken.isLoggedIn,ProductController.getProductList)
    router.get('/api/product',CheckLoginToken.isLoggedIn,ProductController.getProductById);
  }
}
