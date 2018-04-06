import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector:'login',
  templateUrl:'./login.component.html'
})
export class LoginComponent{
input:any = {
  email:null,
  password:null
}
constructor(private _authService:AuthService,private _router:Router){

}
  login(){
  let that = this;
  let promise = this._authService.userLogin(this.input);
  promise.then(function (result) {
   let  data =  result["data"]
    if(data && !data.auth) {
      alert(data.err);
    }
    else {
      localStorage.setItem("auth-token",data.token)
      that._router.navigate(['/dashboard'])
    }
  })
  }
  signup(){
  this._router.navigate(['/register'])
  }

}
