import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.html',
  styleUrl: './productdetail.css'
})
export class Productdetail {
  id!: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
