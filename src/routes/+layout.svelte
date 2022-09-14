<script>

  //import '@brainandbones/skeleton/styles/themes/theme-rocket.css';
  import '@brainandbones/skeleton/styles/themes/theme-skeleton.css';
  import "../app.css";

  import { AppShell } from '@brainandbones/skeleton';
  import { AppBar } from '@brainandbones/skeleton';
  import { Badge } from '@brainandbones/skeleton';

</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <a href="/">sse.dev</a>
      </svelte:fragment>
        <h1 class="text-2xl font-bold text-center p-2">
          Server-Sent-Events Playground Tool
        </h1>
      <svelte:fragment slot="trail">...</svelte:fragment>
    </AppBar>
  </svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- Be sure to insert your route <slot> in the default position --->
	<slot />

  <svelte:fragment slot="pageFooter">
    Brought to you by <a href="https://stubber.com"><Badge background="bg-primary-500">Stubber.com</Badge></a>
  </svelte:fragment>
</AppShell>
