import { Component } from '@angular/core';
import { Gyermek } from "../gyermek/gyermek";

@Component({
  selector: 'app-szulo',
  imports: [Gyermek],
  templateUrl: './szulo.html',
  styleUrl: './szulo.css'
})
export class Szulo {
  szam : number = 0;

  szamNoveles(ertek: number) {
    this.szam += ertek;
  }
}
