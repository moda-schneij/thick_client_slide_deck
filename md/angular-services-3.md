#### Service registering in NgModule  
<pre>
	<code class="hljs" data-trim contenteditable>
		@NgModule({
		  imports: [ BrowserModule ],
		  declarations: [ AppComponent, HeroesComponent, ],
		  providers: [ UserService ]
		  ...
	</code>
</pre>

#### Service registering in Component <!-- .element: class="fragment" data-fragment-index="1" -->
<pre> <!-- .element: class="fragment" data-fragment-index="1" -->
	<code class="hljs" data-trim contenteditable>
		import { Component } from '@angular/core';
		import { HeroService } from './hero.service';
		
		@Component({
		  selector: 'my-heroes',
		  providers: [HeroService],
		  template: `<h2>Heroes</h2> <hero-list></hero-list>`
		})
		export class HeroesComponent { }
	</code>
</pre>
