## Best practices

![alt text](images/best-practices.gif "Best practices") <!-- .element: class="inline-with-content angular-overview -->

- Keep component and directive controller classes lean
- Rely on services to handle the majority of an application's logic, to fetch and persist data, and to manage state
- Keep services and service methods focused (single responsibility) and testable
  - Practice TDD: write test cases before code
- Avoid shared, mutable state
- Keep local copies of state objects, and clearly define higher-level state-update events
  - Especially important with forms - form models keep temporary, mutated state until application state models are updated (e.g., on submit)
- Use container components to hold portions of application state and pass to presentational components through defined inputs
  - Favor uni-directional data flow, down the component tree
- Let container components handle emitted event outputs from presentational components that will affect application state
