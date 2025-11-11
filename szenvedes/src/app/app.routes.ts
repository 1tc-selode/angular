import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { Top10Component } from './pages/top10-component/top10-component';
import { FilmDetailComponent } from './pages/film-detail-component/film-detail-component';
import { FilmFormComponent } from './pages/film-form-component/film-form-component';
import { FilmKategoriaComponent } from './pages/film-kategoria-component/film-kategoria-component';
import { FilmListaComponent } from './pages/film-lista-component/film-lista-component';
import { KapcsolatComponent } from './pages/kapcsolat-component/kapcsolat-component';
import { KedvencekComponent } from './pages/kedvencek-component/kedvencek-component';
import { KonyvDetailComponent } from './pages/konyv-detail-component/konyv-detail-component';
import { KonyvFormComponent } from './pages/konyv-form-component/konyv-form-component';
import { KonyvListaComponent } from './pages/konyv-lista-component/konyv-lista-component';
import { UjdonsagokComponent } from './pages/ujdonsagok-component/ujdonsagok-component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'top10', component: Top10Component },
    { path: 'film-detail', component: FilmDetailComponent },
    { path: 'film-form', component: FilmFormComponent },
    { path: 'film-kategoria', component: FilmKategoriaComponent },
    { path: 'film-lista', component: FilmListaComponent },
    { path: 'kapcsolat', component: KapcsolatComponent },
    { path: 'kedvencek', component: KedvencekComponent },
    { path: 'konyv-detail', component: KonyvDetailComponent },
    { path: 'konyv-form', component: KonyvFormComponent },
    { path: 'konyv-lista', component: KonyvListaComponent },
    { path: 'ujdonsagok', component: UjdonsagokComponent },
];
