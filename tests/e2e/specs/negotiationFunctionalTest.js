
describe('Happy Path - Successful negotiation', () => {
  it('succeeds when employerOffer is higher than employeeSalary', () => { 
  	const employerOffer = '23'
  	const employeeSalary = '22'
  	performNegotiationSteps(employerOffer, employeeSalary)

    cy.get('.modal-dialog')
    .contains('Success!')    
  })

  it('succeeds when employerOffer is equal to employeeSalary', () => { 
  	const employerOffer = '23'
  	const employeeSalary = '23'
  	performNegotiationSteps(employerOffer, employeeSalary)

    cy.get('.modal-dialog')
    .contains('Success!')    
  })
})

describe('UnHappy Path - Failed negotiation', () => {
  it('fails when employeeSalary is higher than employerOffer', () => {
    const employerOffer = '23'
  	const employeeSalary = '24'
  	performNegotiationSteps(employerOffer, employeeSalary)

    cy.get('.modal-dialog')
    .contains('Failure!')    
  })
})

function performNegotiationSteps(employerOffer, employeeSalary){
	cy.visit('/')

    cy.get('.employer-setter input')
    .focus()
    .first()
    .type(employerOffer)

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
