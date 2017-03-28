## Module bundling
- Bundlers assemble static assets into chunks of optimized code that (asynchronously) assure dependencies are met, when needed, in the right order <!-- .element: class="fragment" data-fragment-index="1" -->
- Modern tools (e.g., Webpack, SystemJS) can include JS and code that transpiles to JS (e.g., TypeScript), HTML templates, CSS, and other resources <!-- .element: class="fragment" data-fragment-index="2" -->
- "Tree-shaking" can eliminate unused code <!-- .element: class="fragment" data-fragment-index="3" -->
- "Transforms" pipe front-end resources to optimize or otherwise pre-process them (e.g., TypeScript or ES6 -> ES5, SASS -> CSS)<!-- .element: class="fragment" data-fragment-index="4" -->