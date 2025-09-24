import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-detail-component',
  imports: [CommonModule],
  templateUrl: './pizza-detail-component.html',
  styleUrl: './pizza-detail-component.css'
})
export class PizzaDetailComponent {
  @Input()
  pizza: {name: string, size: string, price: number, available: boolean} | null = null;
  selectedPizza: {name: string, size: string, price: number, available: boolean} | null = null;
}
