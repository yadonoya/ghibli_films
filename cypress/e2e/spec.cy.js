describe('Page access', () => {
  it('Should be able to access our Ghibli page', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('Page access', () => {
  it('Should be able to access our movie details page', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(1) > a > .MuiPaper-root > .MuiButtonBase-root > .MuiCardMedia-root').click();
  })
})