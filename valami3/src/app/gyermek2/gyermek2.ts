import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gyermek2',
  standalone: true,
  templateUrl: './gyermek2.html',
  styleUrl: './gyermek2.css'
})
export class Gyermek2 {
  @Input() szam!: number;
  @Output() valtozas: EventEmitter<'novel' | 'csokkent'> = new EventEmitter();

  novel() {
    this.valtozas.emit('novel');
  }
  csokkent() {
    this.valtozas.emit('csokkent');
  }
}
