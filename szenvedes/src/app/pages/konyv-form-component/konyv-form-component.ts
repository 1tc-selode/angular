import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KonyvService } from '../../services/konyv.service';

@Component({
  selector: 'app-konyv-form-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './konyv-form-component.html',
  styleUrl: './konyv-form-component.css'
})
export class KonyvFormComponent {
  title = '';
  author = '';
  year: number | null = null;
  description = '';
  saved = false;

  constructor(private konyvService: KonyvService) {}

  onSubmit(e: Event) {
    e.preventDefault();
    const t = this.title.trim();
    const a = this.author.trim();
    if (!t || !a) return;

    this.konyvService.add({
      title: t,
      author: a,
      year: this.year || undefined,
      description: this.description || undefined,
    });

    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);

    // reset form
    this.title = '';
    this.author = '';
    this.year = null;
    this.description = '';
  }
}
