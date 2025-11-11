
import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-esemeny-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './esemeny-form-component.html',
  styleUrl: './esemeny-form-component.css'
})
export class EsemenyFormComponent {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  esemeny = signal<any>({
    nev: '',
    datum: '',
    helyszin: '',
    sportag: '',
    leiras: '',
    csapatok: '',
    kedvenc: false
  });
  szerkesztes = signal(false);
  error = signal('');

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.szerkesztes.set(true);
      this.http.get<any[]>('/assets/esemenyek.json').subscribe(data => {
        const found = data.find(e => e.id === Number(id));
        if (found) this.esemeny.set({ ...found, csapatok: found.csapatok.join(', ') });
      });
    }
  }

  mentes() {
    const e = this.esemeny();
    if (!e.nev || !e.datum || !e.helyszin || !e.sportag) {
      this.error.set('Minden mező kitöltése kötelező!');
      return;
    }
    // Mentés localStorage-be
    const stored = localStorage.getItem('esemenyek');
    let lista = stored ? JSON.parse(stored) : [];
    if (this.szerkesztes()) {
      // szerkesztés
  lista = lista.map((ev: any) => ev.id === e.id ? {
        ...e,
        csapatok: typeof e.csapatok === 'string' ? e.csapatok.split(',').map((c: string) => c.trim()) : e.csapatok
      } : ev);
    } else {
      // új esemény
      const maxId = lista.length > 0 ? Math.max(...lista.map((ev: any) => ev.id)) : 0;
      lista.push({
        ...e,
        id: maxId + 1,
        csapatok: typeof e.csapatok === 'string' ? e.csapatok.split(',').map((c: string) => c.trim()) : e.csapatok
      });
    }
    localStorage.setItem('esemenyek', JSON.stringify(lista));
    this.router.navigate(['/esemenyek']);
  }

  vissza() {
    this.router.navigate(['/esemenyek']);
  }
}
