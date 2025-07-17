[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19952788&assignment_repo_type=AssignmentRepo)
# MERN Testing and Debugging Assignment

## Overview
This project demonstrates comprehensive testing strategies for a MERN stack application, including unit, integration, and end-to-end (E2E) tests, as well as debugging techniques.

## Project Structure
- **client/**: React front-end
  - `src/components/`: React components
  - `src/tests/unit/`: Unit tests
  - `src/tests/integration/`: Integration tests
  - `cypress/e2e/`: E2E tests
- **server/**: Express.js back-end
  - `src/controllers/`: Route controllers
  - `tests/unit/`: Unit tests
  - `tests/integration/`: Integration tests

## Testing Tools
- **Jest**: Unit/integration tests (client & server)
- **React Testing Library**: Client component tests
- **Supertest**: Server API tests
- **Cypress**: E2E tests
- **mongodb-memory-server**: In-memory MongoDB for server tests

## How to Run Tests
### Client
- Unit/Integration: `npm test` or `yarn test` in `client/`
- E2E: `npx cypress open` or `npx cypress run` in `client/`
- Coverage: `npm test -- --coverage`

### Server
- Unit/Integration: `npm test` or `yarn test` in `server/`
- Coverage: `npm test -- --coverage`

## Coverage
- Ensure at least 70% code coverage for unit tests on both client and server.
- Run the above coverage commands and include screenshots in your submission.

## Debugging Techniques
- Use `console.log` and error boundaries in React components and tests.
- Use breakpoints, logging, and Node.js Inspector for server debugging.
- Use Cypress interactive mode for E2E debugging.

## Documentation
- See `client/README.md` and `server/README.md` for detailed testing strategies for each side. 