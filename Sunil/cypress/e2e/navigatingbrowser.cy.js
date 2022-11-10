


describe('navigate to browser',()=>{
    it('navigate to browser', () =>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       

         

        

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

    })
})