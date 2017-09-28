import { Injectable } from '@angular/core';
import { User, regUser, todo } from "./user";
import { Router } from "@angular/router";

@Injectable()
export class UserService {

   

  registeredUser:User[] = [];
  todosData:todo[]=[];

  constructor(private router:Router) {
    console.log('User service was created!!!');
    let defaultuser = new User();
    defaultuser.firstName = "Logan";
    defaultuser.lastName = "Arumugam";
    defaultuser.email = "logesh.6377@gmail.com";
    defaultuser.password = "Logan";

    this.registeredUser.push(defaultuser);  
  }

  getAll():todo[]{
    return this.todosData
  } 

  registerUser(_userInfo:User){ 
    this.registeredUser.push(_userInfo);  
    this.router.navigate(['login']);
  }

  loginUser(_userInfo:regUser){ 
    debugger
    if(_userInfo.userName==this.registeredUser[0].firstName && _userInfo.password==this.registeredUser[0].password){
      this.router.navigate(['/dashboard']);
    }
  }

  addItemList(_item:todo){
    this.todosData.push(_item);
    console.log(_item, this.todosData)
  }

  
}
