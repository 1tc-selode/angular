import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { EsemenyListaComponent } from './esemeny-lista-component/esemeny-lista-component';
import { EsemenyDetailComponent } from './esemeny-detail-component/esemeny-detail-component';
import { EsemenyFormComponent } from './esemeny-form-component/esemeny-form-component';
import { EsemenySportagComponent } from './esemeny-sportag-component/esemeny-sportag-component';
import { CsapatListaComponent } from './csapat-lista-component/csapat-lista-component';
import { CsapatDetailComponent } from './csapat-detail-component/csapat-detail-component';
import { CsapatFormComponent } from './csapat-form-component/csapat-form-component';
import { RanglistaComponent } from './ranglista-component/ranglista-component';
import { HirekComponent } from './hirek-component/hirek-component';
import { KedvencekComponent } from './kedvencek-component/kedvencek-component';
import { KapcsolatComponent } from './kapcsolat-component/kapcsolat-component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
		{ path: '', component: EsemenyListaComponent },
		{ path: 'uj', component: EsemenyFormComponent },
		{ path: 'sportag/:nev', component: EsemenySportagComponent },
		{ path: ':id', component: EsemenyDetailComponent },
		{ path: 'szerkeszt', component: EsemenyFormComponent },
		{ path: '', component: CsapatListaComponent },
		{ path: 'uj', component: CsapatFormComponent },
		{ path: ':id', component: CsapatDetailComponent },
		{ path: 'szerkeszt', component: CsapatFormComponent }, 
	{ path: 'ranglista', component: RanglistaComponent },
	{ path: 'hirek', component: HirekComponent },
	{ path: 'kedvencek', component: KedvencekComponent },
	{ path: 'kapcsolat', component: KapcsolatComponent },
	{ path: '**', redirectTo: 'home' }
];

