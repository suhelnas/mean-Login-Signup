import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector:'reset-password',
  templateUrl:'./reset.password.component.html'
})

export class ResetPasswordComponent {
  input = {
    email:null,
    password:null
  }
  password;
  constructor(private _authService:AuthService,private _router:Router){}
  ngOnInit(){
    let that =this;
    that._authService.currentMessage.subscribe(message => that.input.email = message)
  }
  reset(){
    let that = this;
    let regex = /^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    if(!this.input.password.match(regex)){
      alert("Password must contain one capital letter,one small letter,one number,one special charcter and length atleast 8")
      return;
    }
    if(this.input.password == this.password){
      let promise = this._authService.resetPassword(this.input)
      promise.then(function (data) {
        that._router.navigate(['/login'])
      })
    }
  }
}
