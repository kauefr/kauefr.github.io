<script lang="ts">
    import { _ } from "$lib/util/L10n.svelte";
    let value = $state("dark");
    $effect(() => {
        document.documentElement.setAttribute("data-theme", value);
    });
</script>

<div class="control has-icons-left">
    <div class="select">
        <select bind:value>
            <option value="light">{_("theme-light")}</option>
            <option value="dark" selected>{_("theme-dark")}</option>
        </select>
    </div>
    <span class="icon is-left has-text-inherit">
        <i class="fa-solid fa-circle-half-stroke"></i>
    </span>
</div>
