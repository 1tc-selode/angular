
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-kedvencek-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './kedvencek-component.html',
  styleUrl: './kedvencek-component.css'
})
export class KedvencekComponent {
  private http = inject(HttpClient);
  kedvencEsemenyek = signal<any[]>([]);
  kedvencCsapatok = signal<any[]>([]);

  ngOnInit() {
    this.http.get<any[]>('/assets/esemenyek.json').subscribe(data => {
      this.kedvencEsemenyek.set(data.filter(e => e.kedvenc));
    });
    this.http.get<any[]>('/assets/csapatok.json').subscribe(data => {
      this.kedvencCsapatok.set(data.filter(c => c.kedvenc));
    });
  }

  removeEsemeny(id: number) {
    this.kedvencEsemenyek.update(list => list.filter(e => e.id !== id));
    // TODO: persist change (json-server or localStorage)
  }

  removeCsapat(id: number) {
    this.kedvencCsapatok.update(list => list.filter(c => c.id !== id));
    // TODO: persist change (json-server or localStorage)
  }
}
