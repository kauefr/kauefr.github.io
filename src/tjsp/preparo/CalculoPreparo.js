export default class CalculoPreparo {
    ufesp = 2909;
    parcelaMinima = 5 * this.ufesp;
    parcelaMaxima = 3000 * this.ufesp;
    taxaInicial = 0.01;
    taxaPreparo = 0.04;
    valorDaCausa = 0;
    valorDaCondenacao = 0;
    sentencaCondenatoria = false;
    get custasIniciais() {
        return Math.min(
            this.parcelaMaxima,
            Math.max(
                this.parcelaMinima,
                this.taxaInicial * this.valorDaCausa
            )
        );
    }
    get custasPreparo() {
        return Math.min(
            this.parcelaMaxima,
            Math.max(
                this.parcelaMinima,
                this.taxaPreparo * (this.sentencaCondenatoria ? this.valorDaCondenacao : this.valorDaCausa)
            )
        );
    }

    constructor(params = undefined) {
        Object.assign(this, params);
    }

    with(params = undefined) {
        return Object.assign(new CalculoPreparo(), this, params);
    }
}