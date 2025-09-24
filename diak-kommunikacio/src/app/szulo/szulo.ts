import { Component } from '@angular/core';
import { Diak } from '../diak/diak';

@Component({
  selector: 'app-szulo',
  imports: [Diak],
  templateUrl: './szulo.html',
  styleUrl: './szulo.css'
})
export class Szulo {
  diakNev: string = 'Kiss János';
  diakOsztaly: string = '10.A';

  osztalyFrissites(ujOsztaly: string) {
    this.diakOsztaly = ujOsztaly;
  }
}
