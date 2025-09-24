import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BookListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
