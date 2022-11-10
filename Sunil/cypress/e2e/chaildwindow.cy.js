

describe('child window', ()=>{
    it('child winbow',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#opentab').then(function(e1){


            const url =e1.prop('href')
            cy.visit(url)


        })

      
        


    })
})