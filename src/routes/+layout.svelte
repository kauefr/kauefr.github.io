<script lang="ts">
    const {children} = $props();
</script>

<svelte:head>
	<title>Kauê Rodrigues - Página Pessoal</title>
</svelte:head>

{@render children()}

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
</style>