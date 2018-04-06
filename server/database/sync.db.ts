import {ProductModel} from '../implementation/product/models/product.model';
import {UserModel} from '../implementation/authentication/models/register.model';
import {ClientModel} from '../implementation/client/models/client.model';

export class SyncDb{
  static init(dbConn){
    new UserModel(dbConn);
    new ProductModel(dbConn);
    new ClientModel(dbConn);
  }
}
