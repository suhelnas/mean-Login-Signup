import * as sendgrid from '@sendgrid/mail';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken'
require('dotenv').config();
export interface IAuthService {
  register(data,host): Promise<any>;
  login(data):Promise<any>;
  mailVerification(code,email):Promise<any>;
  sendResetPasswordOtp(email,host):Promise<any>;
  verifyOtp(email,otp):Promise<any>;
  resetPassword(email,password):Promise<any>;
}

export class AuthService implements IAuthService{
  register(data,host):Promise<any>{
    let that = this;
    let conn = global['DbConn'];
    let user = conn.model('user');
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    let rand =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    data.profile.otp = rand;
    let promise = user.findOne().where({ email:data.email })
    promise =  promise.then(function (newuser) {
      if(newuser)
        return {"err":"Email Already Exist"};
      else {
        let pass = crypto.createCipher(process.env.ENCRYPTION_ALGO,process.env.ENCRYPTION_KEY).update(data.password,"utf-8","hex");
        data.password = pass;
        return user.create(data).then(function (newuser) {
          let  link="http://"+host+"/api/verify?code="+rand+"&"+"email="+newuser._doc.email;
          const msg = {
            to: newuser._doc.email,
            from: 'node11@cybuzzsc.in',
            subject: 'Email Verification',
            html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>",
          };
          return sendgrid.send(msg).then(function () {
            return newuser;
          });
        });
      }
    })
    promise =  promise.then(function (result) {
      return  {"success":"Verification link sent to your email"};
    })
    return promise;
  }
  login(data):Promise<any>{
    let conn = global['DbConn'];
    let user = conn.model('user');
    let pass = crypto.createCipher(process.env.ENCRYPTION_ALGO,process.env.ENCRYPTION_KEY).update(data.password,"utf-8","hex");
    data.password = pass;
    let promise = user.findOne({email:data.email,password:data.password});
    promise = promise.then(function (data) {
      if (!data) return {"auth": true,"err": "Wrong details"}
      else if (!data._doc.verified)
        return {"auth": true,"err": "Email Not Verified"}
      else
        return data._doc;
      })
    promise = promise.then(function (data) {
      let payLoad = {
        email:data.email,
        id:data._id
          }
          let token = jwt.sign(payLoad,process.env.SESSION_SECRET_KEY);
             return  { "auth": true, "token": token };
    })
    return promise;
  }

  mailVerification(code,email):Promise<any>{
    let conn = global['DbConn'];
    let user = conn.model('user');
    let promise =  user.findOne({email:email})
    promise = promise.then(function (data) {
      console.log(data);
      if(data._doc.profile.otp == code)
      return user.update({email:email},{verified:true},null);
    })
    promise = promise.then(function(data){
      if(data)
        return "Email Verified"
    });
    return promise;
  }

  sendResetPasswordOtp(email,host):Promise<any>{
    let conn = global['DbConn'];
    let user = conn.model('user');
    let promise = user.findOne({email:email});
    promise = promise.then(function (data) {
      if(data){
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
        let rand =   Math.floor(100000 + Math.random() * 900000)
        return user.update({email},{resettoken:rand}).then(function (data) {
          if(data){
            const msg = {
              to: email,
              from: 'node11@cybuzzsc.in',
              subject: 'Password Reset',
              html : "<br> Your OTP is <br>"+rand,
            };
            return sendgrid.send(msg).then(function (result) {
              if(result)
                return {
                "message":"Otp sent on your mail",
                  "success":true
                }
            });
          }
        })

      }
      else
        return  {
          "message":"Mail not found",
          "success":false
        }
    });
    return promise;
  }

  verifyOtp(email,otp):Promise<any>{
    let conn = global['DbConn'];
    let user = conn.model('user');
    let promise = user.findOne({email:email,resettoken:otp})
    promise =  promise.then(function(data){
      if(data){
        return {"verified":true}
      }
      else return {"verified":false}
    })
    return promise;
  }

  resetPassword(email,password):Promise<any>{
    let conn = global['DbConn'];
    let user = conn.model('user');
    let pass = crypto.createCipher(process.env.ENCRYPTION_ALGO,process.env.ENCRYPTION_KEY).update(password,"utf-8","hex");
    return user.update({email:email},{password:pass}).then(function (data) {
      if(data) return {"message":"Password Changed", "success":true}
    })
  }
}
