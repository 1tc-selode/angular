import { Component } from '@angular/core';
import { Gyermek } from '../gyermejk/gyermejk';
import { Gyermek2 } from '../gyermek2/gyermek2';

@Component({
  selector: 'app-szulo',
  imports: [Gyermek, Gyermek2],
  templateUrl: './szulo.html',
  styleUrl: './szulo.css'
})
export class Szulo {
  szam: number = 0;

  onValtozas(event: 'novel' | 'csokkent') {
    if (event === 'novel') {
      this.szam++;
    } else if (event === 'csokkent') {
      this.szam--;
    }
  }
}
