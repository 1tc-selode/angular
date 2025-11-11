import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todosdetail',
  imports: [CommonModule],
  templateUrl: './todosdetail.html',
  styleUrl: './todosdetail.css'
})
export class Todosdetail {
    @Input()
    post: any;

    @Output()
    back = new EventEmitter<void>();
    
    goBack(){
      this.back.emit();
    }
}
