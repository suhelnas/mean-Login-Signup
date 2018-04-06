import {IProductService, ProductService} from '../services/product.service';
import * as express from 'express'
import {Util} from '../../common/util.service';

export class ProductController {
  static addProduct(req : express.Request,res :express.Response){
    let productService:IProductService = new ProductService();
    let promise = productService.saveProduct(req.body);
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
    }

    static getProductList(req : express.Request,res :express.Response){
      let productService:IProductService = new ProductService();
      let promise = productService.productList();
      return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
        return Util.sendResponse(err,data,res)
      });
    }

    static getProductById(req : express.Request,res :express.Response){
      let productService:IProductService = new ProductService();
      let promise = productService.productById(req.query.id);
      return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
        return Util.sendResponse(err,data,res)
      });

    }
}
