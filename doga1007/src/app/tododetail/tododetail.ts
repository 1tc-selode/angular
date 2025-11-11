import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tododetail',
  imports: [CommonModule],
  templateUrl: './tododetail.html',
  styleUrl: './tododetail.css'
})
export class Tododetail {
    @Input()
    todolist: {title: string, dueDate: string, priority: string, description: string} | null = null;

    @Output()
    remove = new EventEmitter<string>();

    onRemove() {
        this.remove.emit(this.todolist?.title);
    }
}
