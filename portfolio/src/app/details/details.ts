import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  @Input() person: any;
  @Output() back = new EventEmitter<void>();

  goBack() {
    this.back.emit();
  }
}
