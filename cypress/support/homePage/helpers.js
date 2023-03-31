// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('headerButtons', (el) => {
    cy.get(el).then((element) => {//<--does not allow for [0] notation
                expect(element).to.have.css('background-color', 'rgb(51, 77, 66)')
                expect(element).to.have.css('color', 'rgb(255, 255, 255)')
                expect(element).to.have.css('font-family', '"Open Sans", Arial, sans-serif')
                expect(element).to.have.css('text-align', 'start')
                expect(element).to.have.css('line-height', '25.5px')
                expect(element).to.have.css('padding-bottom', '14px')
                expect(element).to.have.css('padding-left', '32px')
                expect(element).to.have.css('padding-right', '32px')
                expect(element).to.have.css('padding-top', '14px')
                expect(element).to.have.class('et_hover_enabled')
                expect(el[0]).to.have.text('Sell your Business')
                expect(el[0]).to.have.css('font-size', '15px')
                expect(el[1]).to.have.text('Buy a Business')
                expect(el[1]).to.have.css('font-size', '16px')
    })
})

Cypress.Commands.add('serviceButtons', (el) => {
    cy.get(el).then((element) => {//<--does not allow for [0] notation
                expect(element).to.have.css('background-color', 'rgb(51, 77, 66)')
                expect(element).to.have.css('color', 'rgb(255, 255, 255)')
                expect(element).to.have.css('font-family', '"Open Sans", Arial, sans-serif')
                expect(element).to.have.css('text-align', 'center')
                expect(element).to.have.css('line-height', '25.5px')
                expect(element).to.have.css('padding-bottom', '14px')
                expect(element).to.have.css('padding-left', '79px')
                expect(element).to.have.css('padding-right', '79px')
                expect(element).to.have.css('padding-top', '14px')
                expect(element[0]).to.have.text('Learn More')
                expect(element[1]).to.have.text('Learn More')
                expect(element[2]).to.have.text('Learn More')
                expect(element).to.have.class('et_hover_enabled')
                expect(element[0]).to.have.attr('href')
                expect(element[1]).to.have.attr('href', 'https://exitequity.com/the-process-of-selling-your-business/')
                expect(element[2]).to.have.attr('href', 'https://exitequity.com/buy-a-business/')

    //Testing parent element
    cy.get(el).parent().each((element) => {//<--does not allow for [0] notation
                    expect(element).to.have.css('margin-top', '40px')
        })
    })
})