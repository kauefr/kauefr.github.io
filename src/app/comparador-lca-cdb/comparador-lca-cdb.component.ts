import { Component, inject } from '@angular/core';
import {
  CalculoMode,
  ComparadorLcaCdbService,
  TaxasCDBLCA,
} from './comparador-lca-cdb.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PercentPipe } from '@angular/common';
import { NavbarComponent } from '../core/navbar/navbar.component';

@Component({
  selector: 'app-comparador-lca-cdb',
  imports: [PercentPipe, ReactiveFormsModule, TableModule, NavbarComponent],
  templateUrl: './comparador-lca-cdb.component.html',
})
export class ComparadorLcaCdbComponent {
  service = inject(ComparadorLcaCdbService);
  tableRows: TaxasCDBLCA[] = [0.13, 0.14, 0.15].map((value) =>
    this.service.par_cdb_lca(504, value)
  );

  _(x: unknown): TaxasCDBLCA {
    return x as TaxasCDBLCA;
  }
}
