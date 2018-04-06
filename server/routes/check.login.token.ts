import * as express from 'express';
import * as jwt from 'jsonwebtoken'
export class CheckLoginToken {
  static isLoggedIn(req : express.Request,res :express.Response,next){
    var token = req.headers.authorization;
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, process.env.SECRET_TOKEN, function(err, decoded) {
        if (err) {
          return res.status(401).send({
            success: false,
            message: 'Sign in to continue.'
          });
        } else {
          next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(401).send({
        success: false,
        message: 'Sign in to continue.'
      });
    }
  }
}
