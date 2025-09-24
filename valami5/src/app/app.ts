import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  result = [
    {name: 'Peter', grade : 2},
    {name: 'Anna', grade : 5},
    {name: 'Maria', grade : 3}
  ]
}
