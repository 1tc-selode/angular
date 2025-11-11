
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-csapat-detail-component',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './csapat-detail-component.html',
  styleUrl: './csapat-detail-component.css'
})
export class CsapatDetailComponent {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  csapat = signal<any | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any[]>('/assets/csapatok.json').subscribe(data => {
      const found = data.find(c => c.id === id);
      if (found) this.csapat.set(found);
    });
  }

  goToEdit() {
    if (this.csapat()) {
      this.router.navigate(['/csapatok', this.csapat().id, 'szerkeszt']);
    }
  }

  torolCsapat() {
    if (this.csapat() && confirm('Biztosan törlöd a csapatot?')) {
      // TODO: persist change (json-server or localStorage)
      this.router.navigate(['/csapatok']);
    }
  }

  toggleKedvenc() {
    if (this.csapat()) {
      this.csapat.set({ ...this.csapat(), kedvenc: !this.csapat().kedvenc });
      // TODO: persist change (json-server or localStorage)
    }
  }
}
