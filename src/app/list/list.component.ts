import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { todo } from "../user";
import { UserService } from "../user.service";
import { FilterPipe } from "../filter.pipe";



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[FilterPipe]
})
export class ListComponent implements OnInit {

  fetchData:string[];


  constructor(private todoData:UserService) {
    this.fetchData = this.todoData.getAll();
    console.log('aaaabb--',this.fetchData);
    
  }
 

  ngOnInit() {
  } 

  removeItem(index:number){
    this.todoData.removetodoItem(index); 
  }
 


}
