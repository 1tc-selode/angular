import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gyermek',
  imports: [],
  templateUrl: './gyermek.html',
  styleUrl: './gyermek.css'
})
export class Gyermek {
  
  @Input()
  szam! : number;

  @Output()
  noveny = new EventEmitter<number>();

  noveles() {
    this.noveny.emit(1);
  }
}
