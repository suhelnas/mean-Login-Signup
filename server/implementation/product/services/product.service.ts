import {IProductModel} from '../models/product.model';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;

export interface IProductService{
  saveProduct(productDetail:IProductModel):Promise<any>;
  productList():Promise<IProductModel[]>
  productById(productId):Promise<IProductModel>
}
export class ProductService implements IProductService{
  saveProduct(productDetail:IProductModel):Promise<any>{
    let conn = global['DbConn'];
    let product = conn.model('product');
    if(productDetail._id)
      return product.update({_id: productDetail._id}, productDetail);
    else
        return product.create(productDetail)
  }

  productList():Promise<IProductModel[]>{
    let conn = global['DbConn'];
    let product = conn.model('product');
    let promise = product.find();
    return promise;
  }

  productById(productId):Promise<IProductModel>{
    let conn = global['DbConn'];
    let product = conn.model('product');
    let promise = product.findById(productId);
    return promise;
  }
}
