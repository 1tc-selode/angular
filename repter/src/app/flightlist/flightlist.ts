import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flightlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flightlist.html',
  styleUrls: ['./flightlist.css']
})
export class FlightList {
  @Input() flights: any[] = [];
  @Output() selectFlight = new EventEmitter<any>();

  filterFutureOnly = false;
  filterPlaneType = '';

  get filteredFlights() {
    const now = new Date();
    return this.flights.filter(f => {
      const depDate = new Date(f.departureTime);
      const isFuture = !this.filterFutureOnly || depDate > now;
      const matchesPlane = !this.filterPlaneType || f.plane.toLowerCase().includes(this.filterPlaneType.toLowerCase());
      return isFuture && matchesPlane;
    });
  }

  onSelect(flight: any) {
    this.selectFlight.emit(flight);
  }
}
