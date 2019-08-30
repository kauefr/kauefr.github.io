function maskCentavos (i) {
	return (i/100).toLocaleString('pt-br', {style: "currency", currency: "BRL"})
}

Vue.component('centavos-input', {
	props: {
		value: Number,
		readonly: Boolean,
		autofocus: Boolean
	},
	methods: {
		mask: maskCentavos,
		unmask: function (s) {
			const i = parseInt(s.replace(/[^0-9]/g, ''), 10);
			return isNaN(i) ? 0 : i;
		}
	},
	template: `<input
	type="tel"
	:value="mask(value)"
	@input="$emit('input', unmask($event.target.value))"
	:readonly="readonly"
	:autofocus="autofocus"
    >`
})

Vue.component('copiavel-button', {
	props: {
		conteudo: String
	},
	methods: {
		copiarTexto: function () {
			var area = this.$refs.area;
			area.setAttribute('type', 'text');
			area.select();
			document.execCommand('copy');
			area.setAttribute('type', 'hidden');
			window.getSelection().removeAllRanges();
		}
	},
	template: `<button type="button" @click="copiarTexto">
	<slot></slot>
	<input type="hidden" ref="area" :value="conteudo">
	</button>`
})
