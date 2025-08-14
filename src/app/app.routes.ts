import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'ssi',
    title: 'Seven Seas Idle',
    loadComponent: () =>
      import('./ssi/ssi.component').then((m) => m.SsiComponent),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];
