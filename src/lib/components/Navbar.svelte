<script lang="ts">
    import { onMount } from 'svelte';
    import navbarData from '$lib/data/navbar.json';

    type Item = {
        name: string;
        url: string;
    };

    let navItems: Item[] = navbarData as Item[];

    let responsiveMenu: HTMLInputElement | null = null;
    let menuEl: HTMLElement | null = null;

    function updatemenu(): void {
        if (!menuEl || !responsiveMenu) {
            const checkbox = document.getElementById('responsive-menu') as HTMLInputElement | null;
            const menu = document.getElementById('menu') as HTMLElement | null;
            if (!checkbox || !menu) return;
            if (checkbox.checked) {
                menu.style.borderBottomRightRadius = '0';
                menu.style.borderBottomLeftRadius = '0';
            } else {
                menu.style.borderBottomRightRadius = '';
                menu.style.borderBottomLeftRadius = '';
                menu.style.borderRadius = '10px';
            }
            return;
        }

        if (responsiveMenu.checked) {
            menuEl.style.borderBottomRightRadius = '0';
            menuEl.style.borderBottomLeftRadius = '0';
        } else {
            menuEl.style.borderBottomRightRadius = '';
            menuEl.style.borderBottomLeftRadius = '';
            menuEl.style.borderRadius = '10px';
        }
    }

    onMount(() => {
        updatemenu();
    });
</script>

<nav id="menu" bind:this={menuEl}>
    <input type="checkbox" id="responsive-menu" bind:this={responsiveMenu} on:change={updatemenu} />
    <label for="responsive-menu" aria-label="Toggle menu"></label>
    <ul id="navlinks">
        {#each navItems as nav}
            <li>
                <a href={nav.url} target={nav.url.startsWith('http') ? '_blank' : undefined} rel={nav.url.startsWith('http') ? 'noopener' : undefined}>{nav.name}</a>
            </li>
        {/each}
    </ul>
</nav>
