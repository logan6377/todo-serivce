import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { todo } from "../user";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todosData:string; 
  taskcount:number=0;

  constructor(private todos:UserService) { 
      
  }

  ngOnInit() {
   // this.todosData = new todo()
  } 

  ngAfterContentChecked(){
     this.taskcount = this.todos.getCount();
  }


  addToDoList(){  
    if(this.todosData != ''){
      this.todos.addItemList(this.todosData);   
    }
    this.todosData = ""; 
  }


  

}
