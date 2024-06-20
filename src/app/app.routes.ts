import { Routes } from '@angular/router';
import { CatalogComponent } from './routes/catalog/catalog.component';
import { HomeComponent } from './routes/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
];
