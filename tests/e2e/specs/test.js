// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have number buttons that update display of running total', () => {
		cy.get('#number3').click();
		cy.get('#number4').click();
		cy.get('#number5').click();
		cy.get('.display').should('contain', '345');
  });
  
  it('should be able to have the operator buttons update the display of running total', () => {
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3');
  })
  it('should be able to chain multiple operators', () => {
    cy.get('#operator_add').click(); 
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2');
  });

  it('should be able to display negative numbers', () => {
    cy.get('#operator_add').click()
    cy.get('#number5').click()
    cy.get('#operator_subtract').click()
    cy.get('#number9').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '-4');
  })

  
})
