var data = {
	valorCausa: 0,
	valorCondenacao: 0,
	hasCondenacao: false,
	ufesp: 2909 //2021
}

var app = new Vue({
	el: '#app',
	data: data,
	methods: {
		calcularParcela: function (valor, multiplicador) {
			return Math.min(
				this.valorMaximoParcela,
				Math.max(
					this.valorMinimoParcela,
					Math.floor(valor * multiplicador)
					)
				);
		},
		calcularPreparo: function (valor1, valor4) {
			const parcela1 = this.calcularParcela(valor1, 0.01);
			const parcela4 = this.calcularParcela(valor4, 0.04);
			return parcela1 + parcela4;
		},
		limparValores: function () {
			this.valorCausa = 0;
			this.valorCondenacao = 0;
			this.hasCondenacao = false;
			this.$nextTick(() => {
				this.$refs.causaInput.$el.focus();
			});
		}
	},
	computed: {
		valorMinimoParcela: function () {
			return this.ufesp * 5;
		},
		valorMaximoParcela: function () {
			return this.ufesp * 3000;
		},
		valorPreparo: function () {
			return this.hasCondenacao ?
			this.calcularPreparo(this.valorCausa, this.valorCondenacao) :
			this.calcularPreparo(this.valorCausa, this.valorCausa);
		},
		notaDeCartorio: function () {
			return '(Valor do Preparo: ' + maskCentavos(this.valorPreparo) + ')';
		}
	},
	watch: {
		hasCondenacao: function (val) {
			if (val) {
				this.$nextTick(() => {
					this.$refs.condenacaoInput.$el.focus();
				});
			}
		}
	}
})
