

describe('frames test', function(){
    it('demo frame', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            cy.frameLoaded('#courses-iframe')
            cy.iframe().contains('Mentorship').click()



    })


})
