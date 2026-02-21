<script lang="ts">
    import { onMount } from 'svelte'; 
  import Modal from '$lib/components/Modal.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  let modalOpen = false;
  let modalImgSrc: string = '';
  let modalImgAlt: string = '';

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

  onMount(() => {
    document.title = 'CerberVT - Forms';
  });
</script>

<header>
      <h1>CerberVT</h1>
      <span>This is a unofficial community ran website. Not affiliated with Cerber.</span>
      <Navbar />
</header>

<main>
  <h2>Main Outfit</h2>
  <div class="image-gallery">
    <div class="gallery-item">
      <button type="button" class="img-button" on:click={() => showModal('/assets/forms/Cerbervt_full_model.webp', "Cerber's full model")} aria-label="Open Cerber's full model image">
        <img src="/assets/forms/Cerbervt_full_model.webp" alt="Cerber's full model" />
      </button>
    </div>
  </div>

  <h2>VRChat Outfits</h2>
  <div class="image-gallery">
    <div class="gallery-item">
      <button type="button" class="img-button" on:click={() => showModal('/assets/forms/VRChat/Cerber_VRChat_costume_1.webp', 'Cerber in sailor dress')} aria-label="Open Cerber in sailor dress image">
        <img src="/assets/forms/VRChat/Cerber_VRChat_costume_1.webp" alt="Cerber in sailor dress" />
      </button>
    </div>
    <div class="gallery-item">
      <button type="button" class="img-button" on:click={() => showModal('/assets/forms/VRChat/Cerber_VRChat_costume_2.webp', 'Cerber in purple dress')} aria-label="Open Cerber in purple dress image">
        <img src="/assets/forms/VRChat/Cerber_VRChat_costume_2.webp" alt="Cerber in purple dress" />
      </button>
    </div>
    <div class="gallery-item">
      <button type="button" class="img-button" on:click={() => showModal('/assets/forms/VRChat/Cerber_VRChat_costume_3.png', 'Cerber in casual outfit')} aria-label="Open Cerber in casual outfit image">
        <img src="/assets/forms/VRChat/Cerber_VRChat_costume_3.png" alt="Cerber in casual outfit" />
      </button>
    </div>
    <div class="gallery-item">
      <button type="button" class="img-button" on:click={() => showModal('/assets/forms/VRChat/Cerber_VRChat_costume_4.webp', 'Cerber in gothic lolita')} aria-label="Open Cerber in gothic lolita image">
        <img src="/assets/forms/VRChat/Cerber_VRChat_costume_4.webp" alt="Cerber in gothic lolita" />
      </button>
    </div>
  </div>
</main>

<Modal bind:open={modalOpen} src={modalImgSrc} alt={modalImgAlt} onClose={closeModal} />

<footer>
  wan wan! ૮ ・ﻌ・ა
  <a href="https://virtualyoutuber.fandom.com/wiki/CerberVT" style="color: white; text-decoration: underline">Main Source Used</a>
</footer>
