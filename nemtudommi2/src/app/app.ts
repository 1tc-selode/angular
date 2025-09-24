import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Szulo,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
import { Szulo } from './szulo/szulo';
