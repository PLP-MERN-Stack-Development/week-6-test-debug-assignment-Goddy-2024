# Client-Side Testing Strategy

## Tools Used
- **Jest**: For running unit and integration tests
- **React Testing Library**: For testing React components
- **Cypress**: For end-to-end (E2E) testing

## Test Structure
- **Unit tests**: Located in `src/tests/unit/` (e.g., `Counter.test.jsx`)
- **Integration tests**: Located in `src/tests/integration/` (e.g., `Counter.integration.test.jsx`)
- **E2E tests**: Located in `cypress/e2e/` (e.g., `counter.cy.js`)

## How to Run Tests
- **Unit/Integration**: Run `npm test` or `yarn test` in the client directory
- **E2E**: Run `npx cypress open` or `npx cypress run` in the client directory

## Coverage
- Run `npm test -- --coverage` to generate a coverage report

## Debugging Techniques
- Use `console.log` in components and tests to trace values
- Use React DevTools for inspecting component state
- Use Cypress interactive mode for step-by-step E2E debugging 