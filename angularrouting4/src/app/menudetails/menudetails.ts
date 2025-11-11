import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menudetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menudetails.html',
  styleUrl: './menudetails.css'
})
export class Menudetails {
  category: string | null = null;
  items: string[] = [];
  menu: MenuCategory[] = [
    { category: 'levesek', items: ['Gulyásleves', 'Húsleves'] },
    { category: 'foetelek', items: ['Rántott hús', 'Pörkölt'] },
    { category: 'desszertek', items: ['Palacsinta', 'Somlói galuska'] }
  ];

  constructor(private route: ActivatedRoute) {
    this.category = this.route.snapshot.paramMap.get('category');
    const found = this.menu.find(m => m.category === this.category);
    this.items = found ? found.items : [];
  }
}

export interface MenuCategory {
  category: string;
  items: string[];
}
