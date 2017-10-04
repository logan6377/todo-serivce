import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User, regUser } from "../user";
import { UserService } from "../user.service"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profile = {};

  //registeredUser:User;

  loggedUser:regUser;

  constructor(private router:Router, private _service:UserService) { }

  ngOnInit() {
    console.log(this._service);
    this.loggedUser = new regUser(); 
  }

  signUp(){
    this.router.navigate(['/signup']);
  }

  login(){ 
    this._service.loginUser(this.loggedUser);
  }

  loadUser(){
    this._service.getUser().subscribe( data => this.profile = data)     
  }



}
