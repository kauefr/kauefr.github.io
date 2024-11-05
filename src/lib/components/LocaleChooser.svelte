<script lang="ts">
    import { localeInfo, translations } from "$lib/localization/Localization.svelte";

    let value = $state(localeInfo.currentLocale);
    $effect(() => {
        localeInfo.currentLocale = value;
        document.documentElement.setAttribute("lang", value);
    });
</script>

<div class="control has-icons-left">
    <div class="select">
        <select bind:value>
            {#each Object.entries(translations) as [l, t]}
                <option value={l}>{t["locale-name"]}</option>
            {/each}
        </select>
    </div>
    <span class="icon is-left has-text-inherit">
        <i class="fa-solid fa-earth-americas"></i>
    </span>
</div>
