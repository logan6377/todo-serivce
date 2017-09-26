import { Injectable } from '@angular/core';
import { User, regUser } from "./user";
import { Router } from "@angular/router";

@Injectable()
export class UserService {

  registeredUser:User[] = [];

  constructor(private router:Router) {
    console.log('User service was created!!!');
    //console.log(this.registeredUser[0].firstName);

    //this.registeredUser = new User["{firstName:'Logan',lastName:'Arumugam',email:'aa',password:'pass}"];
   }

  registerUser(_userInfo:User){ 
    this.registeredUser.push(_userInfo);  
    this.router.navigate(['login']);
  }

  loginUser(_userInfo:regUser){ 
    debugger
    if(_userInfo.userName==this.registeredUser[0].firstName && _userInfo.password==this.registeredUser[0].password){
      console.log('Login Success!!!')
    }
  } 
}
