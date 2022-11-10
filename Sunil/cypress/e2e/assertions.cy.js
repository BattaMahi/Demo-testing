

describe('asserions', ()=>{

    it('Implicit assertions', ()=>{

          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

          cy.url().should('include', 'orangehrmlive.com')
          cy.url().should('eq','https://pensource-demo.orangehrmlive.com/web/index.php/auth/login')


    })


})