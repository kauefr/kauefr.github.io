import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'ssi',
    title: 'Seven Seas Idle',
    loadComponent: () =>
      import('./ssi/ssi.component').then((m) => m.SsiComponent),
  },
  {
    path: 'comparador-lca-cdb',
    title: 'Comparador LCA/CDB',
    loadComponent: () =>
      import('./pages/comparador-lca-cdb/comparador-lca-cdb.component').then(
        (m) => m.ComparadorLcaCdbComponent
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];
