import {IClientModel} from '../models/client.model';

export interface IClientService{
  saveClient(clientdetail:IClientModel):Promise<any>
  clientById(id):Promise<IClientModel>
  clientList():Promise<IClientModel[]>
}
export class ClientService implements IClientService{
  saveClient(clientdetail:IClientModel):Promise<any>{
    let conn = global['DbConn'];
    let product = conn.model('client');
    if(clientdetail._id)
      return product.update({_id: clientdetail._id}, clientdetail);
    else
      return product.create(clientdetail)

  }

  clientById(clientId):Promise<IClientModel>{
    let conn = global['DbConn'];
    let product = conn.model('client');
    let promise = product.findById(clientId);
    return promise;
  }

  clientList():Promise<IClientModel[]>{
    return global['DbConn'].model('product').find();
  }
}
