describe('Counter Part', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(1000);
  });

  it('increments value when clicked Increment', () => {
    cy.get('.counter')
      .find('.number')
      .invoke('text')
      .then((value) => {
        cy.get('.increment').click();
        cy.get('.number').should('have.text', String(Number(value) + 1));
      });
  });

  it('decrements value when clicked Decrement', () => {
    cy.get('.counter')
      .find('.number')
      .invoke('text')
      .then((value) => {
        cy.get('.decrement').click();
        cy.get('.number').should('have.text', String(Number(value) - 1));
      });
  });
});
