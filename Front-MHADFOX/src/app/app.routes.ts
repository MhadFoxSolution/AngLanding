import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/components/home/home.component';
import { QuienesSomosComponent } from '../pages/components/quienes-somos/quienes-somos.component';
import { ContactoComponent } from '../pages/components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Ruta por defecto
  { path: 'home', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent }
];
