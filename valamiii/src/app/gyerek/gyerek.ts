import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gyerek',
  imports: [CommonModule],
  templateUrl: './gyerek.html',
  styleUrl: './gyerek.css'
})
export class Gyerek {
  @Input() book: { title: string; author: string; description: string } | null = null;
  @Output() deleteBook = new EventEmitter<void>();

  onDelete() {
    this.deleteBook.emit();
  }
}
