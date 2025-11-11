
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usersdetail',
  imports: [CommonModule],
  templateUrl: './usersdetail.html',
  styleUrl: './usersdetail.css'
})
export class Usersdetail {
      @Input()
    post: any;

    @Output()
    back = new EventEmitter<void>();
    
    goBack(){
      this.back.emit();
    }
}
