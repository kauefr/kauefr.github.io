<script lang="ts">
    import {_} from '$lib/util/L10n.svelte';
    let value = $state("dark");
    $effect(() => {
        document.documentElement.setAttribute("data-theme", value);
    });
</script>

<div class="select">
    <select bind:value>
        <option value="light">{_("theme-light")}</option>
        <option value="dark" selected>{_("theme-dark")}</option>
    </select>
</div>
