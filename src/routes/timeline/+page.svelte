<script lang="ts">
	import { onMount } from 'svelte';
	import timelineData from '$lib/data/timeline.json';
	import Modal from '$lib/components/Modal.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	type Item = {
		description: string;
		date: string;
		shortdate: string;
		image?: string;
	};

	let timeline: Item[] = timelineData as Item[];
	let filterShort: string | null = null;
	$: displayed = filterShort ? timeline.filter((i) => i.shortdate === filterShort) : timeline;

	let modalImgSrc: string = '';
	let modalImgAlt: string = '';
	let modalOpen = false;

	function showModal(src: string, alt = ''): void {
		modalImgSrc = src.startsWith('/') ? src : '/' + src;
		modalImgAlt = alt;
		modalOpen = true;
	}

	function closeModal(): void {
		modalOpen = false;
		modalImgSrc = '';
		modalImgAlt = '';
	}

	// header/menu refs and helper
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
        document.title = 'CerberVT - Timeline';
		const setFromHash = () => {
			const h = window.location.hash;
			filterShort = h ? h.replace('#', '') : null;
		};
		setFromHash();
		window.addEventListener('hashchange', setFromHash);

		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal();
		};
		window.addEventListener('keydown', onKey);

		return () => {
			window.removeEventListener('hashchange', setFromHash);
			window.removeEventListener('keydown', onKey);
		};
	});
</script>

<header>
	<h1>CerberVT</h1>
	<span>This is a unofficial community ran website. Not affiliated with Cerber.</span>
	<Navbar />
</header>

<main>
	<h2>Events and History</h2>
	<div class="timeline-container">
		{#each displayed as item}
			<div class="timeline-item" id={'on-' + item.shortdate}>
				<div class="timeline-date">{item.date}</div>
				<div class="timeline-content">{item.description}</div>
				{#if item.image}
					<div class="gallery-item" style="margin-top: 15px">
						<button
							type="button"
							class="img-button"
							on:click={() =>
								showModal(
									item.image!.startsWith('/') ? item.image! : '/' + item.image!,
									item.description
								)}
						>
							<img
								src={item.image!.startsWith('/') ? item.image! : '/' + item.image!}
								alt={item.description}
							/>
						</button>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</main>

<Modal bind:open={modalOpen} src={modalImgSrc} alt={modalImgAlt} onClose={closeModal} />

<Footer />