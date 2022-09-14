<script>

  import { Card } from '@brainandbones/skeleton';
  import { CodeBlock } from '@brainandbones/skeleton';

  import hljs from 'highlight.js';
  import 'highlight.js/styles/github-dark.css';
  import { storeHighlightJs } from '@brainandbones/skeleton';
storeHighlightJs.set(hljs);

</script>



<Card background="bg-primary-500" color="text-white">
  <h1 class="text-3xl font-bold text-center">
    Server-Sent-Events Playground Tool
  </h1>

  <p>This site allows you to play with Server-Sent Events easily.</p>


  <h3 class="text-2xl font-bold text-center">Basic Usage</h3>
  <p>
    To receive the message in your browser copy and paste this into a script tag.  You will now be able to manipulate the DOM with the incoming data.<br>
    You will receive a message by default every 2 seconds from the server.
    <a href="/testpage">Demo Page to help you understand</a><br>
    <a href="/test">Test Event Source here</a>
  </p>

  <CodeBlock language="javascript" code={`const evtSource = new EventSource("https://sse.dev/test");
evtSource.onmessage = function(event) {
  var dataobj = JSON.parse(event.data);
  console.log(dataobj);
}`}></CodeBlock>

<!--
  <h3>Basic Usage</h3>
  <p>
    To receive the message in your browser copy and paste this into a script tag.  You will now be able to manipulate the DOM with the incoming data.<br>
    You will receive a message by default every 2 seconds from the server.
    <pre>
    const evtSource = new EventSource("https://sse.dev/test");
    evtSource.onmessage = function(event) {
      var dataobj = JSON.parse(event.data);
      console.log(dataobj);
    }
    </pre>
    <a href="/testpage">Demo Page to help you understand</a><br>
    <a href="/test">Test Event Source here</a>
  </p>



  <h2>Advanced</h2>
  <h3>Setting the interval</h3>
  <p>
    To set the interval pass a "interval" query parameter on the url. eg. for 5 seconds do the following
    <pre>
    const evtSource = new EventSource("https://sse.dev/test?interval=5");
    </pre>
    <a href="/test?interval=5">Test Event Source here</a>
  </p>



  <h3>Setting the data returned every interval</h3>
  <p>
    To set the JSON data returned for each interval, pass a "jsonobj" query parameter on the url. eg.
    <pre>
    const evtSource = new EventSource("https://sse.dev/test?jsonobj={"name":"werner","age":38}");
    </pre>
    <a href='/test?jsonobj={"name":"werner","age":38}'>Test Event Source here</a>
  </p> -->


</Card>


