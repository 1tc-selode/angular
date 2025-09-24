import { Component, signal } from '@angular/core';
import { Szulo } from "./szulo/szulo";
import { Diak } from './diak/diak';

@Component({
  selector: 'app-root',
  imports: [Szulo, Diak],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('diak-kommunikacio');
}
