
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KonyvListaComponent } from './konyv-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, KonyvListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
