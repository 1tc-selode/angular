import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Book {
  title: string;
  author: string;
  pages: number;
  popular: boolean;
}

@Component({
  selector: 'app-konyv-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './konyv-lista.component.html',
  styleUrls: ['./konyv-lista.component.css']
})
export class KonyvListaComponent {
  books: Book[] = [
    { title: 'Egri csillagok', author: 'Gárdonyi Géza', pages: 600, popular: true },
    { title: 'A Pál utcai fiúk', author: 'Molnár Ferenc', pages: 320, popular: true },
    { title: 'Tüskevár', author: 'Fekete István', pages: 280, popular: false },
    { title: 'Az arany ember', author: 'Jókai Mór', pages: 480, popular: false }
  ];
}
