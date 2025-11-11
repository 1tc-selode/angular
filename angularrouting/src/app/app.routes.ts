import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { Contant } from './contant/contant';
import { Galery } from './galery/galery';
import { Productdetail } from './productdetail/productdetail';
import { Aboutdetail } from './aboutdetail/aboutdetail';

export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'product', component: Product},
    {path: 'contant', component: Contant},
    {path: 'galery', component: Galery},
    {path: 'product/:id', component: Productdetail},
    {path: 'about/:id', component: Aboutdetail},
    {path: '**', redirectTo: 'home'},

];
