
import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-esemeny-detail-component',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './esemeny-detail-component.html',
  styleUrl: './esemeny-detail-component.css'
})
export class EsemenyDetailComponent {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  esemeny = signal<any | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any[]>('/assets/esemenyek.json').subscribe(data => {
      const found = data.find(e => e.id === id);
      if (found) this.esemeny.set(found);
    });
  }

  goToEdit() {
    if (this.esemeny()) {
      this.router.navigate(['/esemenyek', this.esemeny().id, 'szerkeszt']);
    }
  }

  torolEsemeny() {
    if (this.esemeny() && confirm('Biztosan törlöd az eseményt?')) {
      // TODO: persist change (json-server or localStorage)
      this.router.navigate(['/esemenyek']);
    }
  }

  toggleKedvenc() {
    if (this.esemeny()) {
      this.esemeny.set({ ...this.esemeny(), kedvenc: !this.esemeny().kedvenc });
      // TODO: persist change (json-server or localStorage)
    }
  }
}
