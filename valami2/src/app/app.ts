import { Component, signal } from '@angular/core';
import { Szulo } from './szulo/szulo';

@Component({
  selector: 'app-root',
  imports: [Szulo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('valami2');
}
