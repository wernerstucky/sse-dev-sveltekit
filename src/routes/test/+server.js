import { error } from '@sveltejs/kit';
import { clients } from '$lib/clients.js';
import { get } from 'svelte/store';



//SETTINGS
var event_interval_seconds = 2;


/** @type {import('./$types').RequestHandler} */
export function GET({ url, request }) {

  console.log(request);

  const clientId = Date.now();

  const newClient = {
    id: clientId,
    interval: (url.searchParams.get('interval') || event_interval_seconds) * 1000
  };

  if(url.searchParams.get('jsonobj')){
    //console.log(url.searchParams.get('jsonobj'));
    newClient.custom_dataobj = JSON.parse(url.searchParams.get('jsonobj'));
    //console.log('custom message', newClient.custom_dataobj);
  }

  //Create a readable stream that will be used to send the data on the interval
  //Example from : https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams#creating_your_own_custom_readable_stream
  const stream = new ReadableStream({
    start(controller) {
      newClient.controller = controller;
      //start client
      startClient(newClient);

      request.on('close', () => {
        console.log(`${clientId} Connection closed`);
        clearInterval(newClient.timer);
        clients.update(arr=>{ arr.filter(client => client.id !== clientId); return arr; });
      });
    }
  })
  let opts = {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  };
  let res = new Response(stream,opts);

  return res;
}

function startClient(client){

  // The following function handles each data chunk
  function push() {
    // "pushing" a value that is null signals the end of the stream
    const data = `data: ${JSON.stringify(get_data(client.custom_dataobj))}\n\n`;
    //check if the controller is still there
    if(client.controller){
      try{
        client.controller.enqueue(data);
      }
      catch(e){
        console.error(e);
      }
    }
  }

  var timer = setInterval(() => {
    push();
    //console.log('sent on interval for',client.id,'of',get(clients).length,'clients');
  },client.interval);
  client.timer = timer;

  clients.update(arr=>{ arr.push(client); return arr; });

  // Start by pushing some data synchronously, so that our
  // data is guaranteed to not be missed on the first connection
  push();
}



function get_data(custom_dataobj){
  var now = Date.now()
  if(custom_dataobj){
    var testdata = custom_dataobj;
    testdata.now = now;
  }
  else{
    var testdata = {'testing':true,'sse_dev':'is great','msg':'It works!','now':now};
  }

  return testdata;
}
