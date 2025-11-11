import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flightdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flightdetail.html',
  styleUrls: ['./flightdetail.css']
})
export class FlightDetail {
  @Input() flight: any = null;
  @Output() remove = new EventEmitter<string>();

  onRemove() {
    if (this.flight) {
      this.remove.emit(this.flight.id);
    }
  }
}
