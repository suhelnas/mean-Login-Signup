import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;

@Component({
  selector:'register',
  templateUrl:'./register.component.html'
})
export class RegisterComponent{
  input:any = {
    username:null,
    email:null,
    password:null,
    timestamp:null,
    verified:false,
    profile :{
      otp:null
    }
  }
  password:any= null;
  constructor(private _authService:AuthService,private _router:Router){}
  signup(){
    let that = this;
    let regex = /^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    if(!this.input.password.match(regex)){
      alert("Password must contain one capital letter,one small letter,one number,one special charcter and length atleast 8")
      return;
    }
    if(this.input.password==this.password){
      this.input.timestamp=Date.now();
      let promise = this._authService.userRegister(this.input)
      promise.then(function (data) {
        if(data&& data["err"])
          alert(data["err"]);
        else alert(data["success"])
          that._router.navigate(['/login']);

          })
    }
  }
}
