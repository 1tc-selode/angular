import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  products = ['Laptop', 'Telefon', 'Egér', 'Billentyűzet'];
}
