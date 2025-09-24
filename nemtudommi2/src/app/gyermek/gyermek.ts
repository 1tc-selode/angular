/*
Állat részletező komponens (gyermek):
•	Kapja meg a szülőtől a kiválasztott állat nevét.
•	Csak akkor jelenjen meg, ha valóban van kiválasztva állat.
•	Ha nincs kiválasztva állat, akkor jelenjen meg helyette egy üzenet, hogy „Nincs kiválasztva állat”.
•	Jelenjen meg az állat neve és egy rövid szöveg, például hogy „Ez az állat nagyon aranyos!”.
•	Legyen benne egy gomb, amivel vissza tudsz jelezni a szülő komponensnek, hogy az adott állatot törölni kell.

*/
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gyermek',
  standalone: true,
  templateUrl: './gyermek.html',
  styleUrls: ['./gyermek.css'],
  imports: [CommonModule]
})
export class Gyermek {
  @Input() allat?: string;
  @Output() torles = new EventEmitter<void>();

  torol() {
    this.torles.emit();
  }
}
