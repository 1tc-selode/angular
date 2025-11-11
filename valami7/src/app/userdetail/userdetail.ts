
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  imports: [CommonModule],
  templateUrl: './userdetail.html',
  styleUrl: './userdetail.css'
})
export class Userdetail {
    @Input()
    post: any;

    @Output()
    back = new EventEmitter<void>();
    
    goBack(){
      this.back.emit();
    }
}
