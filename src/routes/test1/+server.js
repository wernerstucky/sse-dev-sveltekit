import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {


  //Create a readable stream that will be used to send the data on the interval
  //use https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams#creating_your_own_custom_readable_stream

  // function to generate random character string
  function randomChars() {
    let string = "";
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < 8; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  const stream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "pushing" a value that is null signals the end of the stream
        controller.enqueue(randomChars());
      }

      // Start by pushing some data synchronously, so that our
      // data is guaranteed to not be missed on the first connection
      push();

      // Push some data every second
      const timer = setInterval(push, 1000);

      // Close the stream after 10s
      setTimeout(() => {
        clearInterval(timer);
        controller.close();
      }, 10000);
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
