import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pizza-list-component',
  imports: [CommonModule],
  templateUrl: './pizza-list-component.html',
  styleUrl: './pizza-list-component.css'
})
export class PizzaListComponent {
  @Input()
  pizzas: {name: string, size: string, price: number, available: boolean}[] = [];

  @Output()
  selectPizza = new EventEmitter<{name: string, size: string, price: number, available: boolean}>();
  onSelectPizza(pizza: {name: string, size: string, price: number, available: boolean}) {
    this.selectPizza.emit(pizza);
  }
}
