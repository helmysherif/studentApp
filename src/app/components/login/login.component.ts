import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  flag = false;
  message = '';
  constructor(private _authServices:AuthService,private _Router:Router) {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password' : new FormControl(null , [Validators.required])
    })
  }
  getRegisterInfo(formData:any)
  {
    if(formData.valid == true)
    {
      this._authServices.login(formData.value).subscribe(data => {
        if(data.message == 'success')
        {
          this._authServices.saveCurrentUser(data.user.first_name,data.user.last_name,data.user.email,data.token);
          this._Router.navigate(['/home']);
        } else {
          this.flag = true;
          this.message = data.message;
        }
      })
    }
  }
  ngOnInit(){}
}