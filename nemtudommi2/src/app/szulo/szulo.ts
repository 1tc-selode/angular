/*
/*
Fő komponens (szülő):
•	Legyen benne egy lista a kedvenc állataidról (pl. kutya, cica, nyuszi, papagáj).
•	A listát jelenítsd meg úgy, hogy minden elem külön sorban látszódjon.
•	Minden állat mellett legyen egy gomb, amivel kiválasztható az adott állat.
•	A kiválasztott állat adatait add át a másik komponensnek.
•	Amikor a másik komponens jelzi, hogy törölni kell egy állatot, akkor töröld ki a listából.

*/
import { Component } from '@angular/core';
import { Gyermek } from '../gyermek/gyermek';
import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-szulo',
  standalone: true,
  imports: [Gyermek, CommonModule, FormsModule],
  templateUrl: './szulo.html',
  styleUrls: ['./szulo.css']
})
export class Szulo {
  kedvencAllatok: string[] = ['kutya', 'cica', 'nyuszi', 'papagáj'];
  allatLeirasok: { [key: string]: string } = {
    'kutya': 'A kutya hűséges.',
    'cica': 'A macska dorombol.',
    'nyuszi': 'A nyuszi ugrál.',
    'papagáj': 'A papagáj beszél.'
  };
  kivalasztottAllat: string | null = null;
  ujAllatNev: string = '';
  ujAllatLeiras: string = '';

  get allatSzamlalo(): number {
    return this.kedvencAllatok.length;
  }

  kivalaszt(allat: string) {
    this.kivalasztottAllat = allat;
  }

  torolKivalasztottAllat() {
    if (this.kivalasztottAllat) {
      this.kedvencAllatok = this.kedvencAllatok.filter(a => a !== this.kivalasztottAllat);
      delete this.allatLeirasok[this.kivalasztottAllat];
      this.kivalasztottAllat = null;
    }
  }

  ujAllatHozzaadasa() {
    const nev = this.ujAllatNev.trim();
    const leiras = this.ujAllatLeiras.trim();
    if (nev && !this.kedvencAllatok.includes(nev)) {
      this.kedvencAllatok.push(nev);
      this.allatLeirasok[nev] = leiras || 'Nincs leírás.';
      this.ujAllatNev = '';
      this.ujAllatLeiras = '';
    }
  }
}
