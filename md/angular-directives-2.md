##### The example template uses two built-in structural directives
<pre>
	<code class="hljs" data-trim contenteditable>
		<li *ngFor="let hero of heroes"></li>
		<hero-detail *ngIf="selectedHero"></hero-detail>
	</code>
</pre>

*ngFor tells Angular to stamp out one < li > per hero while *ngIf includes the HeroDetail component only if a selected hero exists.

##### The ngModel directive, is an example of an attribute directive. It implements two-way data binding that modifies the behavior of < input > element by setting its display value property and responding to change events. <!-- .element: class="fragment" data-fragment-index="2" -->

<pre> <!-- .element: class="fragment" data-fragment-index="2" -->
	<code class="hljs" data-trim contenteditable>
		<input [(ngModel)]="hero.name">
	</code>
</pre>
	