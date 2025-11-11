import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { KonyvService, Konyv } from '../../services/konyv.service';

@Component({
  selector: 'app-konyv-lista-component',
  imports: [CommonModule],
  templateUrl: './konyv-lista-component.html',
  styleUrl: './konyv-lista-component.css'
})
export class KonyvListaComponent {
  books$: Observable<Konyv[]>;

  constructor(private konyvService: KonyvService) {
    this.books$ = this.konyvService.books$;
  }
}
