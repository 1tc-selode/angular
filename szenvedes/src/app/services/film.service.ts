import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Film {
  id?: number;
  title: string;
  director: string;
  year?: number;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class FilmService {
  private _films = new BehaviorSubject<Film[]>([]);
  public readonly films$ = this._films.asObservable();
  private nextId = 1;

  add(film: Omit<Film, 'id'>) {
    const newFilm: Film = { ...film, id: this.nextId++ };
    this._films.next([...this._films.getValue(), newFilm]);
  }

  clear() {
    this._films.next([]);
    this.nextId = 1;
  }
}

