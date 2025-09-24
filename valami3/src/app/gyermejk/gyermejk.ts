import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gyermejk',
  standalone: true,
  templateUrl: './gyermejk.html',
  styleUrl: './gyermejk.css'
})
export class Gyermek {
  @Input() szam!: number;
  @Output() valtozas: EventEmitter<'novel' | 'csokkent'> = new EventEmitter();

  novel() {
    this.valtozas.emit('novel');
  }
  csokkent() {
    this.valtozas.emit('csokkent');
  }
}
