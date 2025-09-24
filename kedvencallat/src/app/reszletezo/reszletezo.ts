import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reszletezo',
  imports: [CommonModule, EventEmitter],
  templateUrl: './reszletezo.html',
  styleUrl: './reszletezo.css'
})
export class Reszletezo {
  @Input() allat?: string;
  @Output() torles = new EventEmitter<string>();
}
