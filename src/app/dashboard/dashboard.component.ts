import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { todo } from "../user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todosData:todo;

  constructor(private todos:UserService) { }

  ngOnInit() {
    
  }


  addToDoList(){
    this.todos.addItemList(this.todosData); 
  }

}
