import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector:'forget-password',
  templateUrl:'./forget.password.html'
})

export class ForgetPassword {
  input = {
    email :null
  };
  constructor(private _authService:AuthService,  private _router:Router){}
  ngOnInit(){
    let that =  this;
    that._authService.currentMessage.subscribe(message => that.input.email = message)
  }
  sendResetLink(){
    let that =  this;
    let promise =  this._authService.sendResetPasswordOtp(this.input);
     promise.then(function (result) {
       if(result["success"]) {
         alert(result["message"])
          that._authService.changeMessage(that.input.email);
         that._router.navigate(['/verify/otp'])
       }
       else  alert(result["message"])
    })
  }
}
