## State management

- Avoid shared, mutable state <!-- .element: class="fragment" -->
- Keep local copies of state objects, and clearly define higher-level state-update events <!-- .element: class="fragment" -->
  - Especially important with forms - form models keep temporary, mutated state until application state models are updated (e.g., on submit) <!-- .element: class="fragment" -->
- Use container components to hold portions of application state and pass to presentational components through defined inputs <!-- .element: class="fragment" -->
  - Favor uni-directional data flow, down the component tree <!-- .element: class="fragment" -->
- Let container components handle emitted event outputs from presentational components that will affect application state <!-- .element: class="fragment" -->