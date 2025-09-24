import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-animal-detail',
  imports: [CommonModule],
  templateUrl: './animal-detail.html',
  styleUrl: './animal-detail.css'
})
export class AnimalDetail {

  @Input() animal: { name: string, description: string } | null = null;
  @Output() remove = new EventEmitter<string>();

  onRemove() {
    if (this.animal) {
      this.remove.emit(this.animal.name);
    }
  }
}
