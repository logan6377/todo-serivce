import { Component, OnInit } from '@angular/core';
import { todo } from "../user";
import { UserService } from "../user.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  fetchData:todo[];

  constructor(private todoData:UserService) {
    this.fetchData = this.todoData.getAll();
   }



  ngOnInit() {
  } 



}
