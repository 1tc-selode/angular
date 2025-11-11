import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightList } from './flightlist/flightlist';
import { FlightDetail } from './flightdetail/flightdetail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FlightList, FlightDetail],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  selectedFlight: any = null;

  flights = [
    { id: 'AA1234', departure: 'Budapest', arrival: 'London', departureTime: '2025-11-15 14:30', arrivalTime: '2025-11-15 16:00', plane: 'Airbus A320', seats: 180, freeSeats: 42 },
    { id: 'BA5678', departure: 'Paris', arrival: 'New York', departureTime: '2025-11-16 10:00', arrivalTime: '2025-11-16 19:30', plane: 'Boeing 747', seats: 250, freeSeats: 87 },
    { id: 'LH9101', departure: 'Berlin', arrival: 'Tokyo', departureTime: '2025-10-05 18:45', arrivalTime: '2025-10-06 09:10', plane: 'Airbus A350', seats: 300, freeSeats: 123 },
    { id: 'RY4567', departure: 'Rome', arrival: 'Madrid', departureTime: '2025-11-10 07:20', arrivalTime: '2025-11-10 09:00', plane: 'Boeing 737', seats: 150, freeSeats: 25 },
  ];

  onSelectFlight(flight: any) {
    this.selectedFlight = flight;
  }

  onRemoveFlight(id: string) {
    this.flights = this.flights.filter(f => f.id !== id);
    this.selectedFlight = null;
  }
}
