


describe('Alerts handle', () =>{

    it('Alerts handling', () =>{

        cy.visit('https://www.qaclickacademy.com/')

        cy.get('#opentab').invoke('removeAttr','target').click()
        
        cy.url().should('include','qaclickacademy')

        cy.go('back')

    })

})