describe('Counter E2E', () => {
  it('should increment and decrement the counter', () => {
    cy.visit('/');
    cy.contains('Count: 0');
    cy.get('[data-testid="increment"]').click();
    cy.contains('Count: 1');
    cy.get('[data-testid="decrement"]').click();
    cy.contains('Count: 0');
  });
}); 