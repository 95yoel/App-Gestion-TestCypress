describe('Admin form visibility', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8100')
  });

  it('should initially show Admin button and hide Admin form', () => {
    cy.getByData('admin-button').should('be.visible')
    cy.getByData('admin-form').should('not.be.visible')
  })

  it('should show Admin form when Admin button is clicked', () => {
    cy.getByData('admin-button').should('be.visible').click()
    cy.getByData('admin-form').should('be.visible')
  })
})

describe('User Route Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100')
  });

  it('should navigate to /usuario when User button is clicked', () => {
    cy.getByData('usuario-button').click()
    cy.url().should('include', '/usuario');
  });
});
