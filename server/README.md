# Server-Side Testing Strategy

## Tools Used
- **Jest**: For running unit and integration tests
- **Supertest**: For HTTP assertions in integration tests
- **mongodb-memory-server**: For in-memory MongoDB during tests

## Test Structure
- **Unit tests**: Located in `tests/unit/` (e.g., `sampleController.test.js`)
- **Integration tests**: Located in `tests/integration/` (e.g., `posts.test.js`)

## How to Run Tests
- Run `npm test` or `yarn test` in the server directory

## Coverage
- Run `npm test -- --coverage` to generate a coverage report

## Debugging Techniques
- Use `console.log` in controllers and tests to trace values
- Use breakpoints and Node.js Inspector for step-by-step debugging 