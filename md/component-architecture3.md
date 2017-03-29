## Key concepts

- Container components hold or channel application state <!-- .element: class="fragment" data-fragment-index="1" -->
- Presentational components take in application state and expose events through a defined API of inputs and outputs <!-- .element: class="fragment" data-fragment-index="2" -->
  - Container components pass state into presentational components and handle events emitted from them <!-- .element: class=" fragment" data-fragment-index="3" -->
  - Container components interact with services for getting and persisting data, etc <!-- .element: class=" fragment" data-fragment-index="4" -->
- The router is a component state machine that maps components' state to parameterized URLs (e.g., "myapp.com/myview/item/42/?decorate=false") <!-- .element: class="fragment" data-fragment-index="5" -->