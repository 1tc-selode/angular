import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Bookdetail } from './bookdetail/bookdetail';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Bookdetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  selectedBook: {title: string, author: string, descreption: string} | null = null;

  books = [
    {title: 'A pál utcai fiúk', author: 'Molnár Ferenc', descreption: 'Egy híres magyar ifjúsági regény'},
    {title: 'Harry Potter', author: 'J. K. Rowling', descreption: 'Egy varázslatos kaland'},
    {title: 'Gyűrűk ura', author: 'J. R. R. Tolkien', descreption: 'Egy epikus fantasy történet'}
  ];

  //Új könyv hozzáadása
  addBook(newTitle: string, newAuthor: string, newDescreption: string) {
    if (newTitle.trim() && newAuthor.trim())
    this.books.push({title: newTitle, author: newAuthor, descreption: newDescreption});
  }

  //Könyv kiválasztása
  selectBook(book : {title: string, author: string, descreption: string}) {
    this.selectedBook = book;
  }

  //Könyv törlése
  removeBook(title: string) {
    this.books = this.books.filter(b => b.title !== title);
    this.selectedBook = null;
  }
}
