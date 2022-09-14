import { error } from '@sveltejs/kit';
import { clients } from '$lib/clients.js';
import { get } from 'svelte/store';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  const clientsarr = get(clients);

  if(clientsarr?.length > 0 ){
    //loop over clientsarr and generate a new array of clients with only id and interval
    const clientsarr2 = clientsarr.map(client => {
      return { id: client.id, interval: client.interval };
    });

    //console.log('clientsarr2',clientsarr2);
    if (clientsarr2) {
      return {'clientsarr':clientsarr2};
    }
  }
  else{
    return {'clientsarr':[]};
  }

  throw error(404, 'Not found');
}
