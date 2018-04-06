import * as mongoose from 'mongoose';

export interface IClientModel {
  _id:string,
  clientname:string,
  clientcompany:string,
  clientAddress:string,
  clientEmai:string,
  mobile:number,
  staff: [{
    staffname:string,
    department:string,
    designation:string,
    mobile:number,
    Address:string,
  }]
}
export class ClientModel {
  private static clientModel = null;
  constructor(dbConn){
    let clientschema = new mongoose.Schema({
      _id: {
        type: mongoose.Schema.ObjectId,
        auto: true,
        autoIncrement:true
      },
      clientname:{
        type:String
      },
      clientcompany:{
        type:String
      },
      clientAddress:{
        type:String
      },
      clientEmail:{
        type:String
      },
      mobile:{
        type:Number
      },
      staff:[{
        staffname:{
          type:String
        },
        department:{
          type:String
        },
        designation:{
          type:String
        },
        mobile:{
          type:Number
        },
        Address:{
          type:String
        }
      }]
    });
    ClientModel.clientModel= dbConn.model('client',clientschema);
  }
  static clientmodel(){
    return ClientModel.clientModel;
  }
}
