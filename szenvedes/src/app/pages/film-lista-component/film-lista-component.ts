import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FilmService, Film } from '../../services/film.service';

@Component({
  selector: 'app-film-lista-component',
  imports: [CommonModule],
  templateUrl: './film-lista-component.html',
  styleUrl: './film-lista-component.css'
})
export class FilmListaComponent {
  films$: Observable<Film[]>;

  constructor(private filmService: FilmService) {
    this.films$ = this.filmService.films$;
  }
}
