import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Destinations } from './destinations/destinations';
import { Destinationsdetail } from './destinationsdetail/destinationsdetail';
import { Contact } from './contact/contact';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: Home },
	{ path: 'destinations', component: Destinations },
	{ path: 'destinations/:id', component: Destinationsdetail },
	{ path: 'contact', component: Contact },
	{ path: '**', redirectTo: 'home' },
];
