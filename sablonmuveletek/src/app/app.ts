import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ɵEmptyOutletComponent } from "../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ɵEmptyOutletComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  elemek = [
    'valami1',
    'valami2',
    'valami3'
  ];

  onSubmit(e: any) {
    e.preventDefault();
    const ujErtek = e.target.elements.cim.value;
    this.elemek.push(ujErtek);
    e.target.reset();
  }

  elemTorles(i: number) {
    this.elemek.splice(i, 1);
  }
}
