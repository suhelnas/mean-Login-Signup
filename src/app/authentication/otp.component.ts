import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector:'otp',
  templateUrl:'./otp.component.html'
})

export class OtpComponent {
  input = {
    otp:null,
    email:null
  }
  constructor(private _authService:AuthService,private _router:Router){}
  ngOnInit(){
    this._authService.currentMessage.subscribe(message => this.input.email = message)
  }
  sendOtp(){
    let that = this;

    let promise = this._authService.verifyOtp(this.input);
    promise.then(function (data) {
      if(data["verified"])
      that._router.navigate(['/reset/password']);
      else alert("Otp is incorrect")
    })
  }
}
