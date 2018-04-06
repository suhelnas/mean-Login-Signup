import * as express from 'express'
import {AuthController} from './controller/auth.controller';

export class AuthRoutes {
  static init(router: express.Router) {
    router.post('/api/new/user/register',AuthController.userRegister);
    router.post('/api/verify/otp',AuthController.verifyOtp)
    router.post('/api/user/login',AuthController.userLogin);
    router.get('/api/verify',AuthController.emailVerification);
    router.post('/api/reset/password',AuthController.resetPassword);
    router.post('/api/send/reset/password/otp',AuthController.sendResetPasswordOtp)


  }
}
