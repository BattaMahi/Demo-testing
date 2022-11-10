

describe('open naukari',function(){

    it('open naukari',function(){

        cy.visit('https://www.naukri.com/'), ({
            headers: {
                "Accept": "application/json,text/plan,*/*",
                "User-Agent": "axios/0.18.0"
            }
        })
    })
})

