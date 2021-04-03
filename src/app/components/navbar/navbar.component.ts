import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private _authServices:AuthService,private _Router:Router){
    _authServices.currentUser.subscribe((res:any) => {
      if(res != null)
      {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }
  logout()
  {
    this._authServices.logout();
    this._Router.navigate(['/login'])
  }
  ngOnInit(): void {
  }
}