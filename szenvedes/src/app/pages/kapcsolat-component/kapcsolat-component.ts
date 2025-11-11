import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-kapcsolat-component',
  imports: [NgIf],
  templateUrl: './kapcsolat-component.html',
  styleUrl: './kapcsolat-component.css'
})
export class KapcsolatComponent {
  sent = signal(false);

  onSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form) as any);
    
    console.log('Kapcsolat űrlap elküldve:', data);
    this.sent.set(true);
    setTimeout(() => this.sent.set(false), 3500);
    form.reset();
  }
}
