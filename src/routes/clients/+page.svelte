<script>

  /** @type {import('./$types').PageData} */
  export let data;

  $: console.log(data);

</script>

<div class="p-5">
  <table class="border border-slate-400">
    <tr>
      <th class="border border-slate-400 p-2">ID</th>
      <th class="border border-slate-400 p-2">Interval</th>
    </tr>
    {#each data.clientsarr as cl}
      <tr>
        <td class="border border-slate-400 p-2">{cl.id}</td>
        <td class="border border-slate-400 p-2">{cl.interval}</td>
      </tr>
    {/each}
  </table>
</div>
