<script lang="ts">
    import { _ } from "$lib/localization/Localization.svelte";
    import { routes } from "$lib/util/Routes";
    import LocaleChooser from "./LocaleChooser.svelte";
    import ThemeChooser from "./ThemeChooser.svelte";
    let isActive = $state(false);
    const onclick = () => (isActive = !isActive);
</script>

<nav class="navbar">
    <div class="navbar-brand">
        <a class="navbar-item" href={routes.get("Home")}>kaue.rodrigues</a>
        <button
            class="navbar-burger {isActive ? 'is-active' : ''}"
            {onclick}
            aria-label="menu"
            role="menu"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>
    <div class="navbar-menu {isActive ? 'is-active' : ''}">
        <div class="navbar-start">
            <a class="navbar-item" href={routes.get("Home")}>{_("Home")}</a>
            <a class="navbar-item" href={routes.get("Seven Seas Idle")}
                >Seven Seas Idle</a
            >
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <LocaleChooser />
            </div>
            <div class="navbar-item">
                <ThemeChooser />
            </div>
        </div>
    </div>
</nav>
