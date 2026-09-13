import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'comparador-cdb-lca',
    loadComponent: () =>
      import('./comparador-cdb-lca/comparador-cdb-lca.component').then(
        (m) => m.ComparadorCdbLcaComponent,
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
