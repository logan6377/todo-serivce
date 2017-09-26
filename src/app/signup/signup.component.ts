import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User, regUser } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registeredUser:User;
  loggedUser:regUser;

  constructor(private _uService:UserService) { 
    console.log('New user was added!!!')
  }

  ngOnInit() {
    this.registeredUser = new User()
  }

  register(){ 
    this._uService.registerUser(this.registeredUser);  
  }



  

}
