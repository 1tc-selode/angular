import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photosdetail',
  imports: [CommonModule],
  templateUrl: './photosdetail.html',
  styleUrl: './photosdetail.css'
})
export class Photosdetail {
    @Input()
    post: any;

    @Output()
    back = new EventEmitter<void>();
    
    goBack(){
      this.back.emit();
    }
    
}
