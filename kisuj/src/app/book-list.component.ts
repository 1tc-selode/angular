import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Book {
  title: string;
  author: string;
  pages: number;
  popular: boolean;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [
    { title: 'Egri csillagok', author: 'Gárdonyi Géza', pages: 600, popular: true },
    { title: 'A Pál utcai fiúk', author: 'Molnár Ferenc', pages: 320, popular: true },
    { title: 'Tüskevár', author: 'Fekete István', pages: 280, popular: false },
    { title: 'A kőszívű ember fiai', author: 'Jókai Mór', pages: 550, popular: false }
  ];
}
