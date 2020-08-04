const { port, key } = Cypress.env()

describe('Board', function () {
  beforeEach(function (){
    cy.visit(`http://localhost:${port}`)
    cy.reload(true)
  })

  it('authorization with correct key succeeds', function () {
    cy.get('input').type(key)
    cy.get('form').submit()
    cy.get('#key-prompt').should('not.exist')
  })

  it('authorization with incorrect key fails', function () {
    cy.get('input').type('wrongkey')
    cy.get('form').submit()
    cy.get('#key-prompt').should('exist')
  })
})