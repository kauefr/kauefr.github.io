<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";

    import Navbar from '$lib/components/Navbar.svelte';
    import { _ } from "$lib/localization/Localization.svelte";
    
    const {children} = $props();
</script>

<svelte:head>
	<title>{_("Homepage Title")}</title>
</svelte:head>

<Navbar/>

{@render children()}

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
</style>