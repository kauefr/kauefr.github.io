import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'comparador-cdb-lca',
    title: 'Comparador CDB/LCA',
    loadComponent: () =>
      import('./comparador-cdb-lca/comparador-cdb-lca.component').then(
        (m) => m.ComparadorCdbLcaComponent
      ),
  },
  {
    path: 'ssi',
    title: 'Seven Seas Idle',
    loadComponent: () =>
      import('./ssi/ssi.component').then((m) => m.SsiComponent),
  },
  {
    path: 'sv-fishing',
    title: 'Stardew Valley Fishing',
    loadComponent: () =>
      import('./sv-fishing/sv-fishing.component').then(
        (m) => m.SvFishingComponent
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];
