import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Konyv {
  id?: number;
  title: string;
  author: string;
  year?: number;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class KonyvService {
  private _books = new BehaviorSubject<Konyv[]>([]);
  public readonly books$ = this._books.asObservable();
  private nextId = 1;

  add(book: Omit<Konyv, 'id'>) {
    const newBook: Konyv = { ...book, id: this.nextId++ };
    this._books.next([...this._books.getValue(), newBook]);
  }

  clear() {
    this._books.next([]);
    this.nextId = 1;
  }
}
