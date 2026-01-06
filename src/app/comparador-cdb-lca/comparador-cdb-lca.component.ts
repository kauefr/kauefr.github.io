import { Component, inject } from '@angular/core';
import {
  ComparadorCdbLcaService,
  TaxasCDBLCA,
} from './comparador-cdb-lca.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PercentPipe } from '@angular/common';
import { as_ } from '../utils/misc';
import { LayoutComponent } from '../core/layout/layout.component';

@Component({
  selector: 'app-comparador-cdb-lca',
  imports: [PercentPipe, ReactiveFormsModule, TableModule, LayoutComponent],
  templateUrl: './comparador-cdb-lca.component.html',
})
export class ComparadorCdbLcaComponent {
  private service = inject(ComparadorCdbLcaService);
  tableRows: TaxasCDBLCA[] = [0.13, 0.14, 0.15].map((value) =>
    this.service.par_cdb_lca(504, value)
  );
  protected as_TaxasCDBLCA = as_<TaxasCDBLCA>;
}
