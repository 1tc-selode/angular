import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Gyerek } from './gyerek/gyerek';


interface Book {
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, Gyerek],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'Kedvenc könyveim';

  books: Book[] = [
    { title: 'A kisherceg', author: 'Antoine de Saint-Exupéry', description: 'Ez egy megható és filozofikus mese.' },
    { title: '1984', author: 'George Orwell', description: 'Egy disztópikus regény a totalitárius jövőről.' },
    { title: 'A Gyűrűk Ura', author: 'J.R.R. Tolkien', description: 'Egy epikus kaland Középföldén.' }
  ];

  selectedBook: Book | null = null;

  newTitle = '';
  newAuthor = '';
  newDescription = '';

  sortAsc = true;

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  addBook() {
    const title = this.newTitle.trim();
    const author = this.newAuthor.trim();
    const description = this.newDescription.trim() || 'Nincs leírás.';
    if (!title || !author) return;

    this.books.push({ title, author, description });

    this.newTitle = '';
    this.newAuthor = '';
    this.newDescription = '';
  }

  deleteSelectedBook() {
    if (!this.selectedBook) return;
    this.books = this.books.filter(b => b !== this.selectedBook);
    this.selectedBook = null;
  }

  sortByTitle() {
    this.books.sort((a, b) => {
      const av = a.title.toLowerCase();
      const bv = b.title.toLowerCase();
      if (av < bv) return this.sortAsc ? -1 : 1;
      if (av > bv) return this.sortAsc ? 1 : -1;
      return 0;
    });
    this.sortAsc = !this.sortAsc;
  }
}
