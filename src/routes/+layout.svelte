<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";

    import Navbar from '$lib/components/Navbar.svelte';
    import { _ } from '$lib/util/L10n.svelte';
    
    const {children} = $props();
</script>

<svelte:head>
	<title>Kauê Rodrigues - Página Pessoal</title>
</svelte:head>

<Navbar/>

{@render children()}

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
</style>