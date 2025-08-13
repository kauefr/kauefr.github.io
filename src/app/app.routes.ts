import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'angular-demo',
    title: 'Angular Demo',
    loadComponent: () =>
      import('./pages/angular-demo/angular-demo.component').then(
        (m) => m.AngularDemoComponent
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];
