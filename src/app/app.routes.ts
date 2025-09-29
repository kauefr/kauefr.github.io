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
    path: 'comparador-cdb-lca',
    title: 'Comparador CDB/LCA',
    loadComponent: () =>
      import('./comparador-cdb-lca/comparador-cdb-lca.component').then(
        (m) => m.ComparadorCdbLcaComponent
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];
