<script lang="ts">
    import { translations, localeInfo, _ } from "$lib/util/L10n.svelte";
    let value = $state(localeInfo.currentLocale);
    $effect(() => {
        localeInfo.currentLocale = value;
    });
</script>

<div class="select">
    <select bind:value>
        {#each translations as [l, t]}
            <option selected={l == localeInfo.currentLocale} value={l}>{t.get("locale-name")}</option>
        {/each}
    </select>
</div>
