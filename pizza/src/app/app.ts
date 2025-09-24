import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { PizzaListComponent } from "./pizza-list-component/pizza-list-component";
import { PizzaDetailComponent } from './pizza-detail-component/pizza-detail-component';
import { PizzaFormComponent } from "./pizza-form-component/pizza-form-component";

interface Pizza {
  name: string;
  size: string;   // pl. „Kicsi”, „Közepes”, „Nagy”
  price: number;
  available: boolean;
}


@Component({
  selector: 'app-root',
  imports: [CommonModule, PizzaListComponent, PizzaDetailComponent, PizzaFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  selectedPizza: {name: string, size: string, price: number, available: boolean} | null = null;

  pizzas: Pizza[] = [
    { name: 'Margherita', size: 'Kicsi', price: 1200, available: true },
    { name: 'Pepperoni', size: 'Közepes', price: 1800, available: true },
    { name: 'Hawaii', size: 'Nagy', price: 2200, available: false },
    { name: 'Vegetáriánus', size: 'Közepes', price: 2000, available: true },
    { name: 'BBQ Csirke', size: 'Nagy', price: 2500, available: false }
  ];

  onSelectPizza(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  addPizza(newName: string, newSize: string, newPrice: number, newAvailable: boolean) {
    if (newName.trim() && newSize.trim()) {
      this.pizzas.push({ name: newName, size: newSize, price: newPrice, available: newAvailable });
    }
  }
}
