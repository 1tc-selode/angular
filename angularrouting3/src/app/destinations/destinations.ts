import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css'
})
export class Destinations {
  destinations: Destination[] = [
    { id: 1, city: 'Párizs', country: 'Franciaország', price: 120000, image: 'https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/paris-le-havre-leh/lh17-paris-sightseeing-without-lunch/stock-photo-skyline-of-paris-with-eiffel-tower-at-sunset-in-paris-france-eiffel-tower-is-one-of-the-most-752725282.jpg?w=1920' },
    { id: 2, city: 'Róma', country: 'Olaszország', price: 95000, image: 'https://files.site.forpsi.com/3e/d1/3ed17f9a-8f31-4efb-bfb5-8a9593f79722.jpg' },
    { id: 3, city: 'London', country: 'Egyesült Királyság', price: 110000, image: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/topic-london-gettyimages-760251843-feature?_a=BAVAZGID0' },
    { id: 4, city: 'Barcelona', country: 'Spanyolország', price: 105000, image: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-barcelona-1.jpg' },
    { id: 5, city: 'Prága', country: 'Csehország', price: 80000, image: 'https://www.agoda.com/wp-content/uploads/2024/05/Featured-image-Prague-Castle-with-St.-Vitus-Cathedral-Czech-Republic-1244x700.jpg' }
  ];
}

export interface Destination {
  id: number;
  city: string;
  country: string;
  price: number;
  image: string;
}
