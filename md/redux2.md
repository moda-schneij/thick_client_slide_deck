## Redux ![alt text](images/redux_sm.png "Redux") <!-- .element: class="inline-with-content" -->

- Single store holds application state <!-- .element: class="fragment" -->
  - State is immutable <!-- .element: class="fragment" -->
- Application events dispatch actions to the store to update state <!-- .element: class="fragment" -->
- Reducers: Pure functions (combined together in the store) that take old state and an action/payload to produce new state <!-- .element: class="fragment" -->
- Application components take in new state and update themselves <!-- .element: class="fragment" -->