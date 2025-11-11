import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userstodos',
  imports: [CommonModule],
  templateUrl: './userstodos.html',
  styleUrl: './userstodos.css'
})
export class Userstodo implements OnChanges {
  @Input() userId!: number;
  @Output() back = new EventEmitter<void>();

  todos: any[] = [];
  loading = false;

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['userId'] && this.userId) {
      this.loadTodos();
    }
  }

  async loadTodos() {
    this.loading = true;
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.userId}`);
    this.todos = await res.json();
    this.loading = false;
  }

  goBack() {
    this.back.emit();
  }
}
