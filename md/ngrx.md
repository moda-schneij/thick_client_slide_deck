## NgRX ![alt text](images/ngrx_sm.png "NgRX") <!-- .element: class="inline-with-content" -->

- One implementation of Redux for Angular <!-- .element: class="fragment" --> (another being angular-redux)
- Uses RxJS <!-- .element: class="fragment" -->
  - State updates are observable <!-- .element: class="fragment" -->
  - Observable state values can be bound asynchronously in component templates <!-- .element: class="fragment" -->
  - All subscribers are updated simultaneously <!-- .element: class="fragment" -->
  - Allows removal of Angular change detection <!-- .element: class="fragment" -->