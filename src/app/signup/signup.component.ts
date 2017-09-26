import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User, regUser } from "../user";
import { UserService } from "../user.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registeredUser:User;
  loggedUser:regUser;

  registerForm:FormGroup; 
   
  passwordcheck = new FormControl('', this.shouldHasNumber);

  constructor(private _uService:UserService) {  

    console.log('New user was added!!!')
  }

  ngOnInit() {
    this.registeredUser = new User();

    this.registerForm = new FormGroup({
      firstname : new FormControl('aaa', Validators.required),
      lastname : new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: this.passwordcheck
    });      
  }

  register(){ 
    this._uService.registerUser(this.registeredUser);  
  }

  shouldHasNumber(_value:FormControl){ 
      //return _value == '-' ? null : { invalid: true }; 

      if(_value.value){
        return _value.value[0]==0 ? null : { invalid: true }; 
      }
  }



  

}
