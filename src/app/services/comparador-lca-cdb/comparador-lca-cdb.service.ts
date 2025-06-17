import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparadorLcaCdbService {
  calcular_rentabilitade(capital_inicial: number, rentabilidade_anual: number, periodo: Periodo, aliquota_imposto: number) {
    var juros = 0;
    switch (periodo.tipo) {
      case TIPO_PERIODO.ANOS:
        juros = Math.pow(1 + rentabilidade_anual, periodo.quantidade) - 1;
        break;
      case TIPO_PERIODO.DIAS:
        const rentabilidade_diaria = Math.pow(rentabilidade_anual, 1 / 252);
        juros = Math.pow(1 + rentabilidade_diaria, periodo.quantidade) - 1;
        break;
      default: console.error(periodo.tipo);
    }
    juros *= capital_inicial
    juros *= 1 - aliquota_imposto
    return capital_inicial + juros
  }
}

export class Periodo {
  tipo: TIPO_PERIODO
  quantidade: number
  constructor(tipo: TIPO_PERIODO, quantidade: number) {
    this.tipo = tipo
    this.quantidade = quantidade
  }
}

export enum TIPO_PERIODO {
  DIAS,
  ANOS,
}
