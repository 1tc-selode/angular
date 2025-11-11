import { Component} from '@angular/core';
import { Details } from './details/details';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Details, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  people: any[] = [];
  loaded = false;
  selectedPerson: any = null;

  async ngOnInit() {
    await this.fetchPeople();
  }

  async fetchPeople() {
    try {
      const res = await fetch('https://6909948a2d902d0651b44806.mockapi.io/portfolio/porfolio');
      this.people = await res.json();
      this.loaded = true;
      console.log('✅ API data loaded:', this.people); // ellenőrzésre
    } catch (err) {
      console.error('❌ API error:', err);
    }
  }

  showDetails(person: any) {
    this.selectedPerson = person;
  }

  goBack() {
    this.selectedPerson = null;
  }
}
