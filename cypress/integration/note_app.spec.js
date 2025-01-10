describe('Note App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('frontpage can be opened', () => {
    cy.contains('Notes')
  });

  it('login form can be opened', () => {
    cy.contains('Show Login').click()
  });

  it('user can login', () => {
    cy.contains('Show Login').click()
    cy.get('input:first').type('midudev')
    // cy.get('placeholder:username').type('midudev')
    // cy.get('input').first().type('midudev')
    cy.get('input:last').type('lamidupassword')
    cy.contains('#form-login-button').click()
    cy.contains('#form-login-button').click()
    cy.contains('Create a new note').click()

  });

})