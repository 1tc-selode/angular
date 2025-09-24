import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

interface Movie{
   name: string;
   mufaj: string;
   ido: string;
   nepszeruseg: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  cinemas: Movie[] = [
    {name: 'Avatar', mufaj: 'Sci-fi', ido: '162', nepszeruseg: true},
    {name: 'Titanic', mufaj: 'Romantikus', ido: '195', nepszeruseg: false},
    {name: 'Inception', mufaj: 'Sci-fi', ido: '148', nepszeruseg: false},
    {name: 'The Room', mufaj: 'Dráma', ido: '99', nepszeruseg: false},
    {name: 'The Godfather', mufaj: 'Krimi', ido: '175', nepszeruseg: true}
  ];

  movieFilter: string = '';

  get filteredMovies(): Movie[] {
    return this.cinemas.filter((cinema: Movie) =>
      cinema.name.toLowerCase().includes(this.movieFilter.toLowerCase())
    );
  }
}
