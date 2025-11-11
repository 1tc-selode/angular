
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-csapat-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './csapat-form-component.html',
  styleUrl: './csapat-form-component.css'
})
export class CsapatFormComponent {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  csapat = signal<any>({
    nev: '',
    sportag: '',
    orszag: '',
    alapitva: '',
    leiras: '',
    kedvenc: false
  });
  szerkesztes = signal(false);
  error = signal('');

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.szerkesztes.set(true);
      this.http.get<any[]>('/assets/csapatok.json').subscribe(data => {
        const found = data.find(c => c.id === Number(id));
        if (found) this.csapat.set(found);
      });
    }
  }

  mentes() {
    const c = this.csapat();
    if (!c.nev || !c.sportag || !c.orszag || !c.alapitva) {
      this.error.set('Minden mező kitöltése kötelező!');
      return;
    }
    // TODO: persist (json-server or localStorage)
    this.router.navigate(['/csapatok']);
  }

  vissza() {
    this.router.navigate(['/csapatok']);
  }
}
