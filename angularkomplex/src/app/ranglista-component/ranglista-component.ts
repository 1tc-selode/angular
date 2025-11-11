
import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ranglista-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './ranglista-component.html',
  styleUrl: './ranglista-component.css'
})
export class RanglistaComponent {
  private http = inject(HttpClient);
  csapatok = signal<any[]>([]);
  sportagok = computed(() => Array.from(new Set(this.csapatok().map(c => c.sportag))));

  sortedBySportag = (sportag: string) => {
    return this.csapatok()
      .filter(c => c.sportag === sportag)
      .sort((a, b) => b.gyozelem - a.gyozelem);
  };

  ngOnInit() {
    this.http.get<any[]>('/assets/csapatok.json').subscribe(data => {
      // Add mock 'gyozelem' property for ranking
      this.csapatok.set(data.map(c => ({ ...c, gyozelem: Math.floor(Math.random() * 20) + 1 })));
    });
  }
}
