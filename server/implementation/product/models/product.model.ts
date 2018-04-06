import * as mongoose from 'mongoose';
export interface IProductModel {
  _id:string,
  productname:string,
  hostedon:string,
  producturl:string,
  serverip:string,
  servercredential:string,
  module:[{
    name:string,
    teamworked:string,
    teamworking:string,
    lastupdated:string,
    submodulename:[{
      name:string,
      teamworked:string,
      teamworking:string,
      lastupdated:string,
    }]
  }]

}
export class ProductModel {
   private static productModel = null;
  constructor(dbConn){
   let productSchema = new mongoose.Schema({
     productname:{
       type:String,
       required:true
     },
     hostedon:{
       type:String,
       required:true
     },
     producturl:{
       type:String,
       required:true
     },
     serverip:{
       type:String,
       required:true
     },
     servercredential:{
       type:String,
       required:true
     },
     module:[{
       name:{
        type:String
       },
       teamworked:{
         type:String
       },
       teamworking:{
         type:String
       },
       lastupdated:{
         type:Date
       },
       submodulename:[{
         name:{
           type:String
         },
         teamworked:{
           type:String
         },
         teamworking:{
           type:String
         },
         lastupdated:{
           type:Date
         },
       }]
     }]
   })
    ProductModel.productModel = dbConn.model('product',productSchema);
  }

  static productmodel(){
    return ProductModel.productModel;
  }
}
