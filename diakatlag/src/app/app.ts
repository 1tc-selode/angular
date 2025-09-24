import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students = [
    { name: 'Alice', age: 17, grade: 5, average: 4.7 },
    { name: 'Bob', age: 19, grade: 2, average: 3.8 },
    { name: 'Charlie', age: 16, grade: 1, average: 2.8 },
    { name: 'Dora', age: 18, grade: 4, average: 4.2 },
  ];
}
