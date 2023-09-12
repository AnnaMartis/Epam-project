describe('Counter Part', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
  });

  // it ('increments value when clicked Increment', ()=>{
  //   const value = cy.get('.number');
  //   cy.get('.increment').click();
  //   cy.get('.number').should((number)=>{
  //     expect(number).toBe(value + 1)
  //   })
  // });

  // it ('decrements value when clicked Decrement', ()=>{
  //   const value = cy.get('.number');
  //   cy.get('.decrement').click();
  //   cy.get('.number').should((number)=>{
  //     expect(number).toBe(value + 1)
  //   })
  // });
})