import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bookdetail',
  imports: [CommonModule],
  templateUrl: './bookdetail.html',
  styleUrl: './bookdetail.css'
})
export class Bookdetail {

    @Input()
    book: {title: string, author: string, descreption: string} | null = null;

    @Output()
    remove = new EventEmitter<string>();

    onRemove() {
        this.remove.emit(this.book?.title);
    }
}
