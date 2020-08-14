import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  private host:string = "http://localhost:8080";
  private jwtToken=null;
  private roles:Array<any> = [];
  constructor(private http:HttpClient, private router: Router) {

  }
  login(user){
    return this.http.post(this.host+"/login",user,{observe:'response'});
  }


  loadToken(){
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }

  saveToken(jwt){
    this.jwtToken = jwt;
    localStorage.setItem("token",jwt);
    let jwtHelper = new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
  }



  logout(){
    this.jwtToken = null;
    localStorage.removeItem('token');
    this.router.navigateByUrl("/home");
  }

}
