import { CommonModule } from '@angular/common';
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Todosdetail } from "../todosdetail/todosdetail";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, Todosdetail],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit{
  todos: any[] = [];
  loaded = false;
  selectedpost:any = null;
  detailsloading = false;

  ngOnInit(): void {
    this.loadPosts();
  }
  async loadPosts() {
    this.loaded = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    this.todos = await res.json();
    this.loaded = true;
  }

  async selectPost(id:number){
    this.detailsloading = true;
    this.selectedpost = null;
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
    this.selectedpost = await res.json();
    this.detailsloading = false;
  }

  clearSelection(){
    this.selectedpost = null;
  }
}
