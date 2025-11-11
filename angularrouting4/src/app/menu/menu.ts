import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  menu: MenuCategory[] = [
    { category: 'levesek', items: ['Gulyásleves', 'Húsleves'] },
    { category: 'foetelek', items: ['Rántott hús', 'Pörkölt'] },
    { category: 'desszertek', items: ['Palacsinta', 'Somlói galuska'] }
  ];
}

export interface MenuCategory {
  category: string;
  items: string[];
}
