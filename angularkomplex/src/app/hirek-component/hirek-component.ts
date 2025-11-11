
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hirek-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './hirek-component.html',
  styleUrl: './hirek-component.css'
})
export class HirekComponent {
  private http = inject(HttpClient);
  hirek = signal<any[]>([]);

  ngOnInit() {
    this.http.get<any[]>('/assets/hirek.json').subscribe(data => {
      this.hirek.set(data);
    });
  }
}
