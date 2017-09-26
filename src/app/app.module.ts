import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";
import { SignupModule } from "./signup/signup.module";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { UserService } from "./user.service";

const tdRouts: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SignupModule,
    RouterModule.forRoot(tdRouts)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
