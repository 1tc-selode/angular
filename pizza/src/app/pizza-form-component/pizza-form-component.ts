import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pizza-form-component',
  imports: [],
  templateUrl: './pizza-form-component.html',
  styleUrl: './pizza-form-component.css'
})
export class PizzaFormComponent {

  @Output()
  addPizza = new EventEmitter<{name: string, size: string, price: number, available: boolean}>();

  onAddPizza(newName: string, newSize: string, newPrice: number, newAvailable: boolean) {
    if (newName.trim() && newSize.trim()) {
      this.addPizza.emit({ name: newName, size: newSize, price: newPrice, available: newAvailable });
    }
  }

  
}
