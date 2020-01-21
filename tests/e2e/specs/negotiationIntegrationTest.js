// https://docs.cypress.io/api/introduction/api.html

describe('test Happy Path - Successful negotiation', () => {
  it('Visits the app root url', () => { 
  	const employerSalary = '23'
  	const employeeSalary = '22'
  	performNegotiationSteps(employerSalary, employeeSalary)

    cy.get('.modal-dialog')
    .contains('Success!')    
  })
})

describe('test UnHappy Path - Failed negotiation', () => {
  it('Visits the app root url', () => {
    const employerSalary = '23'
  	const employeeSalary = '24'
  	performNegotiationSteps(employerSalary, employeeSalary)

    cy.get('.modal-dialog')
    .contains('Failure!')    
  })
})

function performNegotiationSteps(employerSalary, employeeSalary){
	cy.visit('/')

    cy.get('.employer-setter input')
    .focus()
    .first()
    .type(employerSalary)

    cy.get('.employer-setter button')
    .click()

    cy.get('.employee-tab-link')
    .click()

    cy.get('.employee-setter input')
    .focus()
    .first()
    .type(employeeSalary)

    cy.get('.employee-setter button')
    .click()
}
