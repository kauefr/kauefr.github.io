import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComparadorCdbLcaService {
  calcular_rentabilidade(args: CalculoOptions): number {
    let result = 0;
    switch (args.mode) {
      case CalculoMode.DIAS_UTEIS_COM_IR: {
        if (args.dias <= 0) {
          if (args.dias == 0) {
            throw new RangeError('args.dias == 0');
          } else if (args.dias < 0) {
            throw new RangeError('args.dias negativo');
          }
        }
        const juros_pre_imposto = Math.pow(1 + args.taxa_diaria, args.dias) - 1;
        result = juros_pre_imposto * (1 - args.aliquota_imposto);
        break;
      }
      case CalculoMode.INVERTER_DIAS_UTEIS_COM_IR: {
        if (args.dias <= 0) {
          if (args.dias == 0) {
            throw new RangeError('args.dias == 0');
          } else if (args.dias < 0) {
            throw new RangeError('args.dias negativo');
          }
        }
        const juros_pre_imposto =
          args.taxa_acumulada / (1 - args.aliquota_imposto);
        result = Math.pow(1 + juros_pre_imposto, 1 / args.dias) - 1;
        break;
      }
    }
    return result;
  }

  taxa_dias_uteis_from_anual(taxa_anual: number): number {
    return Math.pow(1 + taxa_anual, 1 / 252) - 1;
  }

  taxa_anual_from_diaria(taxa_diaria: number): number {
    return Math.pow(1 + taxa_diaria, 252) - 1;
  }

  par_cdb_lca(prazo_dias_uteis: number, taxa_anual_cdb: number): TaxasCDBLCA {
    const taxa_diaria_cdb = this.taxa_dias_uteis_from_anual(taxa_anual_cdb);
    const rentabilidade_cdb = this.calcular_rentabilidade({
      mode: CalculoMode.DIAS_UTEIS_COM_IR,
      dias: prazo_dias_uteis,
      taxa_diaria: taxa_diaria_cdb,
      aliquota_imposto: 0.15,
    });
    const taxa_diaria_lca = this.calcular_rentabilidade({
      mode: CalculoMode.INVERTER_DIAS_UTEIS_COM_IR,
      dias: prazo_dias_uteis,
      taxa_acumulada: rentabilidade_cdb,
      aliquota_imposto: 0,
    });
    return {
      taxa_cdb: taxa_anual_cdb,
      taxa_lca: this.taxa_anual_from_diaria(taxa_diaria_lca),
    };
  }
}

export enum CalculoMode {
  DIAS_UTEIS_COM_IR,
  INVERTER_DIAS_UTEIS_COM_IR,
}

type CalculoOptions =
  | {
      mode: CalculoMode.DIAS_UTEIS_COM_IR;
      taxa_diaria: number;
      dias: number;
      aliquota_imposto: number;
    }
  | {
      mode: CalculoMode.INVERTER_DIAS_UTEIS_COM_IR;
      taxa_acumulada: number;
      dias: number;
      aliquota_imposto: number;
    };

export interface TaxasCDBLCA {
  taxa_cdb: number;
  taxa_lca: number;
}
