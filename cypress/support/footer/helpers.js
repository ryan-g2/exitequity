// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('testCommand', () => {
    cy.log("hi")
})

Cypress.Commands.add('testInputCSS', (el) => {
    //This command tests the css values of the inputs of the form in the site footer
    cy.get(el).find('input').then(($el) => {
        expect($el).to.have.attr('type', 'text')
        expect($el).to.have.attr('value', '')
        expect($el).to.have.attr('aria-required', 'true')
    })
})

Cypress.Commands.add('testForStar', (el) => {
    //This command tests for the css values when an asterisk should be present
    cy.get(el).find('.gfield_required.gfield_required_asterisk')
        .should('have.text', '*')
})

Cypress.Commands.add('testContactHeaders', (el, text, rgb, size) => {
    //This command tests for the css values for the text headers in the contact footer section
    cy.get('@contactFooterInfo').find(el).then(($el) => {
        expect($el).to.have.text(text)
        expect($el).to.have.css('text-transform', 'uppercase')
        expect($el).to.have.css('color', rgb)
        expect($el).to.have.css('font-size', size)
    })
})

Cypress.Commands.add('testContactText', (text, index) => {
    //This command tests for the css values for the text in the contact footer section
    cy.get('@contactFooterInfo').find('a').eq(index).then((el) => {
        cy.get(el).then(($el) => {
            expect($el).to.have.text(text)
            expect($el).to.have.attr('href', '#')
            expect($el).to.have.css('color', 'rgb(193, 193, 193)')
            expect($el).to.have.css('font-size', '16px')
        })
    })
})

Cypress.Commands.add('testContactIcon', (index, title, url) => {
    //This command tests for the css values for the text in the contact footer section
    cy.get('footer').find('.et_pb_column_2_tb_footer').find('li').eq(index).find('a').then((el) => {
            expect(el).to.have.attr('title', title)
            expect(el).to.have.attr('target', '_blank')
            expect(el).to.have.attr('href', url)
            expect(el).to.have.css('background-color', 'rgb(255, 255, 255)')
            expect(el).to.have.css('color', 'rgb(51, 77, 66)')
            expect(el).to.have.css('font-family', '"Open Sans", Arial, sans-serif')
            expect(el).to.have.css('font-size', '14px')
            expect(el).to.have.css('height', '32px')
            expect(el).to.have.css('width', '32px')
    })
})
