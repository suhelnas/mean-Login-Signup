import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService{
  constructor(private _http:HttpClient){}

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  userLogin(loginParameters){
    let that =  this;
    return new Promise((resolve, reject) => {
      return  that._http.post('/api/user/login',loginParameters).subscribe(function (data) {
        resolve(data);
      },function (err) {
        reject(err)
      })
    })
  }
  userRegister(registerParameters){
    let that = this;
    return new Promise((resolve, reject) => {
      return  that._http.post('/api/new/user/register',registerParameters).subscribe(function (data) {
        resolve(data);
      })
    })
  }

  sendResetPasswordOtp(resetParameters) {
    let that = this;
    return new Promise((resolve, reject) => {
      return that._http.post('/api/send/reset/password/otp', resetParameters).subscribe(function (data) {
        resolve(data);
      });
    })
  }
    verifyOtp(otpparameters){
      let that = this;
      return new Promise((resolve, reject) => {
        return that._http.post('/api/verify/otp', otpparameters).subscribe(function (data) {
          resolve(data);
        })
      })
    }

    resetPassword(passparameters){
      let that = this;
      return new Promise((resolve, reject) => {
        return that._http.post('/api/reset/password',passparameters).subscribe(function (data) {
          resolve(data);
        })
      })
    }
}
