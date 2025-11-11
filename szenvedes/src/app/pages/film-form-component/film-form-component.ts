import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-form-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './film-form-component.html',
  styleUrls: ['./film-form-component.css']
})
export class FilmFormComponent {
  title = '';
  director = '';
  year: number | null = null;
  description = '';
  saved = false;

  constructor(private filmService: FilmService) {}

  onSubmit(e: Event) {
    e.preventDefault();
    const t = this.title.trim();
    const d = this.director.trim();
    if (!t || !d) return;

    this.filmService.add({
      title: t,
      director: d,
      year: this.year || undefined,
      description: this.description || undefined,
    });

    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);

    // reset form
    this.title = '';
    this.director = '';
    this.year = null;
    this.description = '';
  }
}
