import * as express from 'express'
import {ClientService, IClientService} from '../services/client.service';
import {Util} from '../../common/util.service';
export class ClientController {
  static addClient(req : express.Request,res :express.Response){
    let clientService:IClientService = new ClientService();
    let promise =  clientService.saveClient(req.body);
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }

  static getClietById(req : express.Request,res :express.Response){
    let clientService:IClientService = new ClientService();
    let promise =  clientService.clientById(req.query.id)
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }

  static clientList(req : express.Request,res :express.Response){
    let clientService:IClientService = new ClientService();
    let promise =  clientService.clientList();
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }
}
