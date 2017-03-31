### Bootstrap

- main.ts:  sets the MainModule <!-- .element: class="fragment" data-fragment-index="1" -->
- index.html or the place where angular application is injected <!-- .element: class="fragment" data-fragment-index="2" -->
	<pre>
	<code class="hljs" data-trim contenteditable>
		System.import('main.js').catch(function(err){ console.error(err); });
	</code>
	</pre>
- MainModule: defines the bootstrap component. The root component of the application. <!-- .element: class="fragment" data-fragment-index="3" -->
	<pre>
	<code class="hljs" data-trim contenteditable>
		bootstrap: [ AppComponent ]
	</code>
	</pre>
- From the root component the application relays on router navigation through child components. <!-- .element: class="fragment" data-fragment-index="4" -->