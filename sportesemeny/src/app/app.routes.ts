import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Csapatdetail } from './csapatdetail/csapatdetail';
import { Csapatlista } from './csapatlista/csapatlista';
import { Csapatform } from './csapatform/csapatform';
import { Esemenylista } from './esemenylista/esemenylista';
import { Esemenydetail } from './esemenydetail/esemenydetail';
import { Esemenyform } from './esemenyform/esemenyform';
import { Esemenysportag } from './esemenysportag/esemenysportag';
import { Kapcsolat } from './kapcsolat/kapcsolat';
import { Ranglista } from './ranglista/ranglista';
import { Hirek } from './hirek/hirek';
import { Kedvencek } from './kedvencek/kedvencek';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home},
    { path: 'csapatdetail', component: Csapatdetail},
    { path: 'csapatlista', component: Csapatlista},
    { path: 'csapatform', component: Csapatform},
    { path: 'esemenylista', component: Esemenylista},
    { path: 'esemenydetail', component: Esemenydetail},
    { path: 'esemenyform', component: Esemenyform},
    { path: 'esemenysportag', component: Esemenysportag},
    { path: 'kapcsolat', component: Kapcsolat},
    { path: 'ranglista', component: Ranglista},
    { path: 'hirek', component: Hirek},
    { path: 'kedvencek', component: Kedvencek},
];
