import { Component } from '@angular/core';
import { Todos } from "./todos/todos";
import { Photos } from "./photos/photos";
import { User } from "./user/user";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Todos, Photos, User, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
