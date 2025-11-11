import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Menudetails } from './menudetails/menudetails';
import { Contact } from './contact/contact';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: Home },
	{ path: 'menu', component: Menu },
	{ path: 'menu/:category', component: Menudetails },
	{ path: 'contact', component: Contact },
	{ path: '**', redirectTo: 'home' },
];
