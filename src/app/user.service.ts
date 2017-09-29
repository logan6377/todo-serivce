import { Injectable } from '@angular/core';
import { User, regUser, todo } from "./user";
import { Router } from "@angular/router";

@Injectable()
export class UserService {

  registeredUser:User[] = [];
  todosData:string[]=[];
  taskcount:number=0;
  styleDash:boolean=false

  constructor(private router:Router) {
    console.log('User service was created!!!');
    let defaultuser = new User();
    defaultuser.firstName = "Logan";
    defaultuser.lastName = "Arumugam";
    defaultuser.email = "logesh.6377@gmail.com";
    defaultuser.password = "Logan";

    this.registeredUser.push(defaultuser); 
  }

  getAll():string[]{
    return this.todosData
  } 

  getCount(){
    return this.taskcount = this.todosData.length
  }

  registerUser(_userInfo:User){ 
    this.registeredUser.push(_userInfo);  
    this.router.navigate(['login']);
  }

  loginUser(_userInfo:regUser){ 
    debugger
    if(_userInfo.userName==this.registeredUser[0].firstName && _userInfo.password==this.registeredUser[0].password){
      this.router.navigate(['/dashboard']);
      this.styleDash = true;
    }
  }

  addItemList(_item:string){
    this.todosData.push(_item); 
  } 

  removetodoItem(_value:number){
    this.todosData.splice(_value,1);
  }

  getDashBoardClass(){
    return this.styleDash
  }


  
}
