### Module config

- declarations: the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes. <!-- .element: class="fragment" data-fragment-index="1" -->

- exports: the subset of declarations that should be visible and usable in the component templates of other modules. <!-- .element: class="fragment" data-fragment-index="2" -->

- imports: other modules whose exported classes are needed by component templates declared in this module. <!-- .element: class="fragment" data-fragment-index="3" -->

- providers: creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app. <!-- .element: class="fragment" data-fragment-index="4" -->

- bootstrap: the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property. <!-- .element: class="fragment" data-fragment-index="5" -->