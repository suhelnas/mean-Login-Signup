import * as express from 'express'
import {AuthService, IAuthService} from '../services/auth.service';
import {Util} from '../../common/util.service';
export class AuthController {
  static userRegister(req : express.Request,res :express.Response){
    let authService:IAuthService = new AuthService();
    let promise = authService.register(req.body,req.get('host'));
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }
  static userLogin(req : express.Request,res :express.Response){
    let authService:IAuthService = new AuthService();
    let promise = authService.login(req.body);
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      console.log(data);
      return Util.sendResponse(err,data,res)
    });
  }

  static emailVerification(req : express.Request,res :express.Response){
    let authService:IAuthService = new AuthService();
    let promise = authService.mailVerification(req.query.code,req.query.email)
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }

  static sendResetPasswordOtp(req : express.Request,res :express.Response){
    let authService:IAuthService = new AuthService();
    let promise = authService.sendResetPasswordOtp(req.body.email,req.get('host'))
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }

  static verifyOtp(req : express.Request,res :express.Response){
    let authService:IAuthService = new AuthService();
    let promise = authService.verifyOtp(req.body.email,req.body.otp);
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }

  static resetPassword(req : express.Request,res :express.Response){
    let authService:IAuthService = new AuthService();
    let promise = authService.resetPassword(req.body.email,req.body.password);
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    });
  }
}
