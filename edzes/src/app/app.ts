
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Resztvevo {
  nev: string;
}

export interface Edzes {
  id: number;
  tipus: string;
  idotartam: number; // percben
  oktato: string;
  resztvevok: Resztvevo[];
  nepszeru: boolean;
}


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  edzesek: Edzes[] = [
    {
      id: 1,
      tipus: 'Futás',
      idotartam: 60,
      oktato: 'Kiss Anna',
      resztvevok: [
        { nev: 'Nagy Péter' },
        { nev: 'Kovács Lili' },
        { nev: 'Szabó Gábor' }
      ],
      nepszeru: true
    },
    {
      id: 2,
      tipus: 'Úszás',
      idotartam: 45,
      oktato: 'Tóth Béla',
      resztvevok: [
        { nev: 'Varga Dóra' },
        { nev: 'Kiss Anna' }
      ],
      nepszeru: false
    },
    {
      id: 3,
      tipus: 'Torna',
      idotartam: 30,
      oktato: 'Kovács Lili',
      resztvevok: [],
      nepszeru: false
    }
  ];

  edzesFilter: string = '';
  resztvevoFilter: string = '';
  kivalasztottEdzes: Edzes | null = null;

  get szurtEdzesek(): Edzes[] {
    return this.edzesek.filter(e =>
      e.tipus.toLowerCase().includes(this.edzesFilter.toLowerCase())
    );
  }

  get szurtResztvevok(): Resztvevo[] {
    if (!this.kivalasztottEdzes) return [];
    return this.kivalasztottEdzes.resztvevok.filter(r =>
      r.nev.toLowerCase().includes(this.resztvevoFilter.toLowerCase())
    );
  }

  edzesKivalasztas(edzes: Edzes) {
    this.kivalasztottEdzes = edzes;
    this.resztvevoFilter = '';
  }
}
