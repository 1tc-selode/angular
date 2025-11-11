import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movies/movies';

@Component({
  selector: 'app-moviesdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moviesdetail.html',
  styleUrl: './moviesdetail.css'
})
export class Moviesdetail {
  id!: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
