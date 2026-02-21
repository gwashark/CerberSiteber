<script lang="ts">
  import { onMount } from 'svelte';

  export let open: boolean = false;
  export let src: string = '';
  export let alt: string = '';
  export let onClose: (() => void) | undefined;

  let modalEl: HTMLElement | null = null;

  function close() {
    open = false;
    if (onClose) onClose();
  }

  // Close when Escape is pressed (global listener)
  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open && e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
</script>

{#if open}
  <div class="modal" bind:this={modalEl}>
    <button
      class="modal-backdrop"
      aria-label="Close dialog"
      type="button"
      onclick={close}
    ></button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      class="modal-inner"
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Dialog'}
      tabindex="0"               
      onclick={(e) => e.stopPropagation()}
    >
      <button
        class="close"
        onclick={close}
        aria-label="Close"
      >
        &#xd7;
      </button>

      {#if src}
        <img class="modal-content" src={src} alt={alt} />
      {/if}

      <slot />
    </div>
  </div>
{/if}