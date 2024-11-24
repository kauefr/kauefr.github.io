<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import { _ } from "$lib/localization/Localization.svelte";
    
    const {children} = $props();
</script>

<svelte:head>
	<title>Seven Seas Idle</title>
</svelte:head>

<Navbar/>

{@render children()}