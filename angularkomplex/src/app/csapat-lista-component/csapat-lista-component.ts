
import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-csapat-lista-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './csapat-lista-component.html',
  styleUrl: './csapat-lista-component.css'
})
export class CsapatListaComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  csapatok = signal<any[]>([]);
  private _filter = signal('');
  get filter() {
    return this._filter();
  }
  set filter(val: string) {
    this._filter.set(val);
  }
  filteredCsapatok = computed(() => {
    const f = this._filter().toLowerCase();
    return this.csapatok().filter(c =>
      c.nev.toLowerCase().includes(f) ||
      c.sportag.toLowerCase().includes(f) ||
      c.orszag.toLowerCase().includes(f)
    );
  });

  ngOnInit() {
    this.http.get<any[]>('/assets/csapatok.json').subscribe(data => {
      this.csapatok.set(data);
    });
  }

  goToUj() {
    this.router.navigate(['/csapatok/uj']);
  }

  goToDetail(id: number) {
    this.router.navigate(['/csapatok', id]);
  }

  goToEdit(id: number) {
    this.router.navigate(['/csapatok', id, 'szerkeszt']);
  }

  torolCsapat(id: number) {
    if (confirm('Biztosan törlöd a csapatot?')) {
      this.csapatok.update(list => list.filter(c => c.id !== id));
      // TODO: persist change (json-server or localStorage)
    }
  }

  toggleKedvenc(id: number) {
    this.csapatok.update(list =>
      list.map(c => c.id === id ? { ...c, kedvenc: !c.kedvenc } : c)
    );
    // TODO: persist change (json-server or localStorage)
  }
}
