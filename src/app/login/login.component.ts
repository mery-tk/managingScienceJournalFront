import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;
  roles:Array<any>;
  jwtHelper=new JwtHelper();

  constructor(private authenticationService:AuthenticationService,private router:Router) { }


  ngOnInit(): void {
    let token = this.authenticationService.loadToken();
    if(token){
      this.router.navigateByUrl("/home");
      console.log("authenticated");
    }else{
      console.log(" not authenticated")
    }

  }
  onLogin(user){
    console.log(user);
    this.authenticationService.login(user).subscribe(resp=>{
      let jwt = resp.headers.get('Authorization');
      this.authenticationService.saveToken(jwt);
      this.router.navigateByUrl("/home");
      console.log(resp.headers.get("Authorization"));
    },error => {
      this.mode=1;
    });
  }
  onRegister(){
    this.router.navigateByUrl("/inscription");
  }


}
