import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  flag = false;
  pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  constructor(private _authServices:AuthService,private _Router:Router) {
    this.registerForm = new FormGroup({
      'first_name' : new FormControl(null , [Validators.required]),
      'last_name' : new FormControl(null , [Validators.required]),
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password' : new FormControl(null , [Validators.required , Validators.pattern(this.pattern)])
    })
  }
  getRegisterInfo(formData:any)
  {
    if(formData.valid == true)
    {
      this._authServices.register(formData.value).subscribe(data => {
        if(data.message == 'success')
        {
          this._Router.navigate(['/login']);
        } else {
          this.flag = true;
        }
      })
    }
  }
  ngOnInit(): void {
  }
}