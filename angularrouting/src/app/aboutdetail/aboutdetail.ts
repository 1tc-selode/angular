import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutdetail',
  imports: [],
  templateUrl: './aboutdetail.html',
  styleUrl: './aboutdetail.css'
})
export class Aboutdetail {
  id!: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
