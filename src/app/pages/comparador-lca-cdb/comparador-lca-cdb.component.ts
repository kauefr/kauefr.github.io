import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ComparadorLcaCdbService, Periodo, TIPO_PERIODO } from '../../services/comparador-lca-cdb/comparador-lca-cdb.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-comparador-lca-cdb',
  imports: [
    TableModule,
    PercentPipe
  ],
  templateUrl: './comparador-lca-cdb.component.html',
  styleUrl: './comparador-lca-cdb.component.css'
})
export class ComparadorLcaCdbComponent {
  service = inject(ComparadorLcaCdbService)
  valores: any[] = [];
  constructor() {
    for (var i = 0; i < 10; ++i) {
      this.valores.push({
        selic: (10 + i) / 100,
        renda: this.service.calcular_rentabilitade(1, (10 + i) / 100, new Periodo(TIPO_PERIODO.ANOS, 2), 0) - 1,
      })
    }
  }

}
