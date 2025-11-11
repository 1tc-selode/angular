
import { Component, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esemeny-lista-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './esemeny-lista-component.html',
  styleUrl: './esemeny-lista-component.css'
})
export class EsemenyListaComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  esemenyek = signal<any[]>([]);

  private _filter = signal('');
  get filter() {
    return this._filter();
  }
  set filter(val: string) {
    this._filter.set(val);
  }
  filteredEsemenyek = computed(() => {
    const f = this._filter().toLowerCase();
    return this.esemenyek().filter(e =>
      e.nev.toLowerCase().includes(f) ||
      e.sportag.toLowerCase().includes(f) ||
      e.helyszin.toLowerCase().includes(f)
    );
  });

  ngOnInit() {
    const stored = localStorage.getItem('esemenyek');
    if (stored) {
      this.esemenyek.set(JSON.parse(stored));
    } else {
      this.http.get<any[]>('/assets/esemenyek.json').subscribe(data => {
        this.esemenyek.set(data);
        localStorage.setItem('esemenyek', JSON.stringify(data));
      });
    }
  }

  goToUj() {
    this.router.navigate(['/esemenyek/uj']);
  }

  goToDetail(id: number) {
    this.router.navigate(['/esemenyek', id]);
  }

  goToEdit(id: number) {
    this.router.navigate(['/esemenyek', id, 'szerkeszt']);
  }

  torolEsemeny(id: number) {
    if (confirm('Biztosan törlöd az eseményt?')) {
      this.esemenyek.update(list => {
        const uj = list.filter(e => e.id !== id);
        localStorage.setItem('esemenyek', JSON.stringify(uj));
        return uj;
      });
    }
  }

  toggleKedvenc(id: number) {
    this.esemenyek.update(list =>
      list.map(e => e.id === id ? { ...e, kedvenc: !e.kedvenc } : e)
    );
    // TODO: persist change (json-server or localStorage)
  }
}
