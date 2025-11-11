
import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-esemeny-sportag-component',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './esemeny-sportag-component.html',
  styleUrl: './esemeny-sportag-component.css'
})
export class EsemenySportagComponent {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  esemenyek = signal<any[]>([]);
  sportag = signal('');
  filteredEsemenyek = computed(() => {
    const s = this.sportag().toLowerCase();
    return this.esemenyek().filter(e => e.sportag.toLowerCase() === s);
  });

  ngOnInit() {
    this.sportag.set(this.route.snapshot.paramMap.get('nev') || '');
    this.http.get<any[]>('/assets/esemenyek.json').subscribe(data => {
      this.esemenyek.set(data);
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/esemenyek', id]);
  }
}
