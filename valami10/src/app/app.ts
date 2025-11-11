import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Users } from "./users/users";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{

}
