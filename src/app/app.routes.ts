import { Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { CrudStaticComponent } from './Component/crud-static/crud-static.component';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path: 'About' , component : AboutComponent},
    {path: 'CrudStatic' , component : CrudStaticComponent}
];
