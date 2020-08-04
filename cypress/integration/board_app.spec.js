describe('Board', function () {
  beforeEach(function (){
    cy.visit('http://localhost:3003')
  })

  it('authorization with correct key succeeds', function () {
    cy.get('input').type('testkey')
    cy.get('form').submit()
    cy.get('#key-prompt').should('not.exist')
  })

  it('authorization with incorrect key fails', function () {
    cy.reload(true)
    cy.get('input').type('devkey')
    cy.get('form').submit()
    cy.get('#key-prompt').should('exist')
  })
})