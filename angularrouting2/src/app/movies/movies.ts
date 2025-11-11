import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
}

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
  movies: Movie[] = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010 },
    { id: 2, title: 'A Gyűrűk Ura', genre: 'Fantasy', year: 2001 },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
    { id: 4, title: 'Gladiátor', genre: 'Historical', year: 2000 },
    { id: 5, title: 'Vissza a jövőbe', genre: 'Adventure', year: 1985 }
  ];
}
