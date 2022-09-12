<script>

  import '@brainandbones/skeleton/styles/themes/theme-rocket.css';
  import "../app.css";

  import { AppShell } from '@brainandbones/skeleton';
  import { AppBar } from '@brainandbones/skeleton';

</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">sse.dev</svelte:fragment>
      Server-Sent-Events Playground Tool
      <svelte:fragment slot="trail">...</svelte:fragment>
    </AppBar>
  </svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- Be sure to insert your route <slot> in the default position --->

	<slot />
</AppShell>
