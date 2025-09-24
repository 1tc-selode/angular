import { Component, signal } from '@angular/core';
import { Photos } from "./photos/photos";

@Component({
  selector: 'app-root',
  imports: [Photos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('json4');
}
