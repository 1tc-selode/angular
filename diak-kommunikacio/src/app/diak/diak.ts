import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diak',
  imports: [],
  templateUrl: './diak.html',
  styleUrl: './diak.css'
})
export class Diak {
  @Input()
  nev! : string ;

  @Input()
  osztaly! : string ;

  @Output()
  osztalyValtoztat = new EventEmitter<string>();

  osztalyModosit() {
    this.osztalyValtoztat.emit('11.b');
  }
}
