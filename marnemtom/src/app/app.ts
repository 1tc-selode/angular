import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

interface Animals {
  nev: string;
  faj: string;
  age: number;
  popular: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  animals: Animals[] = [
    { nev: 'ernő', faj: 'oroszlán', age: 1, popular: true },
    { nev: 'balu', faj: 'medve', age: 10, popular: false },
    { nev: 'miki', faj: 'pingvin', age: 3, popular: false }
  ]
}
