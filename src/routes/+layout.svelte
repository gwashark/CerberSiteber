<script lang="ts">
  import '../css/base.css';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { browser } from '$app/environment';

  let { children } = $props();

  function trackPage(path: string) {
    if (!browser) return;
    const w = window as any;
    try {
      if (w.umami && typeof w.umami.trackView === 'function') {
        w.umami.trackView(path);
      } else if (typeof w.umami === 'function') {
        w.umami('pageview', { path });
      }
    } catch (e) {
      //
    }
  }

  onMount(() => {
    trackPage(location.pathname + location.search);
    afterNavigate(() => trackPage(location.pathname + location.search));
  });
</script>

<svelte:head>
	<link rel="icon" href='/assets/favicons/favicon.ico' />
	<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Yomogi&amp;display=swap"
    />
	<link
      rel="apple-touch-icon"
      sizes="180x180"
      href='/assets/favicons/apple-touch-icon.png'
    />
	<link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href='/assets/favicons/favicon-32x32.png'
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href='/assets/favicons/favicon-16x16.png'
    />
	<meta name="title" content="CerberVT" />
    <meta
      name="description"
      content="Cerber was named after Cerberus, the gatekeeper of Hell, and lives under the UK. She was entranced by video games, anime, VTubers and idols."
    />
    <meta
      name="keywords"
      content="cerbervt, cerber, twitch, hellhound, vtuber, vedalverse"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="theme-color" content="#9f4dd6" />
    <meta
      property="og:image"
      content='/embedImage.png'
    />
	<meta name="twitter:card" content="summary_large_image" />
  <script defer src="http://a.sbvr.us/script.js" data-website-id="3194c16b-96ab-4140-9110-5f0bf9044009" data-domains="cerbervt.pages.dev"></script>
  <title>CerberVT Fan Site</title>
</svelte:head>

{@render children()}
