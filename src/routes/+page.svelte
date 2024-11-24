<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import { _ } from "$lib/localization/Localization.svelte";
</script>

<svelte:head>
    <title>{_("Homepage Title")}</title>
</svelte:head>

<Navbar />

<section class="section">
    <div class="container">
        <h1 class="title">{_("Hello World")}</h1>
    </div>
</section>

<style>
</style>
