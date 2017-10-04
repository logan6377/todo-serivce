import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";
import { SignupModule } from "./signup/signup.module";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { UserService } from "./user.service";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardModule } from "./dashboard/dashboard.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FilterPipe } from './filter.pipe';
import { HttpModule } from '@angular/http';

const tdRouts: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    LoginModule,
    SignupModule,
    ReactiveFormsModule,
    DashboardModule,    
    RouterModule.forRoot(tdRouts)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }


