<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let videoEl: HTMLVideoElement | null = null;
  let playIconVisible = true;
  let timeSliderValue = 0;
  let timeSliderMax = 0;
  let timeDisplay = '0:00 / 0:00';

  function formatTime(seconds: number) {
    if (!isFinite(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }

  function togglePlay() {
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play();
      playIconVisible = false;
    } else {
      videoEl.pause();
      playIconVisible = true;
    }
  }

  function onTimeInput(e: Event) {
    if (!videoEl) return;
    const v = e.target as HTMLInputElement;
    videoEl.currentTime = Number(v.value);
  }

  onMount(() => {
    document.title = 'CerberVT - Intro/Lore';
    if (!videoEl) return;
    const v = videoEl;

    const onLoaded = () => {
      timeSliderMax = v.duration || 0;
      timeSliderValue = v.currentTime || 0;
      timeDisplay = `${formatTime(v.currentTime)} / ${formatTime(v.duration)}.`.replace(/\.$/, '');
    };

    const onTimeUpdate = () => {
      timeSliderValue = v.currentTime;
      timeDisplay = `${formatTime(v.currentTime)} / ${formatTime(v.duration)}`;
    };

    const onEnded = () => {
      playIconVisible = true;
    };

    v.addEventListener('loadedmetadata', onLoaded);
    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('ended', onEnded);

    return () => {
      v.removeEventListener('loadedmetadata', onLoaded);
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('ended', onEnded);
    };
  });
</script>

<header>
  <h1>CerberVT</h1>
  <span>This is a unofficial community ran website. Not affiliated with Cerber.</span>
  <Navbar />
</header>

<main>
  <h1>Intro/Lore</h1>
  <div class="custom-video-container">
    <video class="custom-video" bind:this={videoEl} id="introVideo">
      <source src="/assets/IntroAndLore.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="custom-video-controls">
      <button class="play-pause-btn" id="playPauseBtn" aria-label="Play/Pause" title="Play/Pause" on:click={togglePlay}>
        {#if playIconVisible}
          <svg viewBox="0 0 24 24" class="play-icon"><path d="M8 5v14l11-7z" /></svg>
        {:else}
          <svg viewBox="0 0 24 24" class="pause-icon"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
        {/if}
      </button>
      <input type="range" class="time-slider" id="timeSlider" min="0" bind:value={timeSliderValue} max={timeSliderMax} step="0.1" aria-label="Playback Slider" on:input={onTimeInput} />
      <div class="time-display" id="timeDisplay">{timeDisplay}</div>
    </div>
  </div>
</main>

<Footer />