<script>
  import { Card } from "@brainandbones/skeleton";
  import { CodeBlock } from "@brainandbones/skeleton";
  import { Button } from "@brainandbones/skeleton";
  import { Tooltip } from "@brainandbones/skeleton";

  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css";
  import { storeHighlightJs } from "@brainandbones/skeleton";
  storeHighlightJs.set(hljs);
</script>

<div class="flex flex-row min-h-screen justify-center items-center">
  <div class="">
    <Card class="m-4" background="bg-surface-500" color="text-white">
      <h3 class="text-2xl font-bold text-center">Basic Usage</h3>

      <ul class="list-disc px-5 py-2">
        <li>
          To receive the message in your browser copy and paste this into a
          script tag.

          <CodeBlock
            language="javascript"
            code={`const evtSource = new EventSource("https://sse.dev/test");
    evtSource.onmessage = function(event) {
      var dataobj = JSON.parse(event.data);
      console.log(dataobj);
    }`}
          />
        </li>
        <li>
          You will now be able to manipulate the DOM with the incoming data
        </li>
        <li>
          You will receive a message by default every 2 seconds from the server
        </li>
      </ul>
      <Button variant="ghost-primary" href="/test"
        >Test Event Source here</Button
      >
      <Tooltip>
        <svelte:fragment slot="message"
          >View source on this file to understand better</svelte:fragment
        >
        <svelte:fragment slot="content"
          ><Button variant="ghost-primary" href="/testpage.html"
            >HTML Demo Page</Button
          ></svelte:fragment
        >
      </Tooltip>
    </Card>

    <hr class="p-2" />

    <Card class="mx-4" background="bg-surface-500" color="text-white">
      <h3 class="text-2xl font-bold text-center">Advanced Usage</h3>

      <h3 class="text-xl font-bold">Setting the interval</h3>
      <p>
        To set the interval pass a "interval" query parameter on the url. eg.
        for 5 seconds do the following
        <CodeBlock
          language="javascript"
          code={`const evtSource = new EventSource("https://sse.dev/test?interval=5");`}
        />

        <Button variant="ghost-primary" href="/test?interval=5"
          >Test Event Source here</Button
        >
      </p>

      <br />

      <h3 class="text-xl font-bold">
        Setting the data returned every interval
      </h3>
      <p>
        To set the JSON data returned for each interval, pass a "jsonobj" query
        parameter on the url. eg.
        <CodeBlock
          language="javascript"
          code={`const evtSource = new EventSource("https://sse.dev/test?jsonobj={"name":"werner","age":38}");`}
        />
        <Button
          variant="ghost-primary"
          href={`/test?jsonobj={"name":"werner","age":38}`}
          >Test Event Source here</Button
        >
      </p>
    </Card>

    <hr class="p-2" />

    <Card class="mx-4" background="bg-surface-500" color="text-white">
      <h3 class="text-2xl font-bold text-center">Svelte Demo</h3>

      <p>
        See this demo in SvelteJS for a dynamic example of how to use the
        EventSource API.<br />
        <Button
          variant="ghost-primary"
          href="https://svelte.dev/repl/2259e33e0661432794c0da05ad27e21d?version=3.47.0"
          >Svelte REPL</Button
        >
      </p>
    </Card>


    <hr class="p-2" />

    <Card class="mx-4" background="bg-surface-500" color="text-white">
      <h3 class="text-2xl font-bold text-center">GraphQL Demo</h3>
      <p>
        This returns a basic GraphQL EventSource.<br />
        <Button
          variant="ghost-primary"
          href={`/test?jsonobj={"data":{"test":3}}`}
          >GraphQL Format</Button
        >
      </p>
    </Card>
  </div>
</div>

<br />
<br />
