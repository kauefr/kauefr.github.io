<script lang="ts">
    import LocaleChooser from "$lib/components/LocaleChooser.svelte";
    import ThemeChooser from "$lib/components/ThemeChooser.svelte";

    let value: string = $state("dark");
    $effect(() => {
        document.documentElement.setAttribute("data-theme", value);
    });
    import { _ } from "$lib/util/L10n.svelte";
</script>

<section class="section">
    <div class="container">
        <h1 class="title">Hello World</h1>
        <p class="subtitle">
            My first website with <strong>Bulma</strong>!
        </p>
        <LocaleChooser />
        <ThemeChooser/>
    </div>
</section>

<style>
</style>
