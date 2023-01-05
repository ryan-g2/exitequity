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

Cypress.Commands.add('footerGeneralError', () => {
    //Tests for First Name error text
    cy.get('#gform_1_validation_container').find('h2').scrollIntoView().then((el) => {
        expect(el).to.have.text('There was a problem with your submission. Please review the fields below.')
        expect(el).to.have.css('color', 'rgb(121, 0, 0)')
        expect(el).to.have.css('font-family', '"Open Sans", Arial, sans-serif')
        expect(el).to.have.css('font-size', '16px')
        expect(el).to.have.css('background-color', 'rgba(0, 0, 0, 0)')
        expect(el).to.have.css('text-align', 'center')
    })
    //Tests for the error icon
    cy.get('#gform_1_validation_container').find('.gform_submission_error').scrollIntoView().then($els => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView
        // use getComputedStyle to read the pseudo selector
        const before = win.getComputedStyle($els[0], 'before')
        // read the value of the `content` CSS property
        const backgroundValue = before.getPropertyValue('background-image')
        const heightValue = before.getPropertyValue('height')
        const widthValue = before.getPropertyValue('width')
        const alignValue = before.getPropertyValue('text-align')
        // the returned value will have double quotes around it, but this is correct
        expect(backgroundValue).to.eq('url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIGZpbGw9IiM3OTAwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE5YTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2WiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik0xMiA2aC0ydjZoMlY2Wk0xMiAxNGgtMnYyaDJ2LTJaIiBmaWxsPSIjRkZGIi8+PC9zdmc+")')
        expect(heightValue).to.eq('22px')
        expect(widthValue).to.eq('22px')
        expect(alignValue).to.eq('center')
    })
    //Tests for red border
    cy.get('#gform_1_validation_container').scrollIntoView().then((el) => {
        expect(el).to.have.css('border-bottom-width', '2px')
        expect(el).to.have.css('border-bottom-style', 'solid')
        expect(el).to.have.css('border-bottom-color', 'rgb(121, 0, 0)')
        expect(el).to.have.css('border-left-width', '1px')
        expect(el).to.have.css('border-left-style', 'solid')
        expect(el).to.have.css('border-left-color', 'rgb(121, 0, 0)')
        expect(el).to.have.css('border-right-width', '1px')
        expect(el).to.have.css('border-right-style', 'solid')
        expect(el).to.have.css('border-right-color', 'rgb(121, 0, 0)')
        expect(el).to.have.css('border-top-width', '2px')
        expect(el).to.have.css('border-top-style', 'solid')
        expect(el).to.have.css('border-top-color', 'rgb(121, 0, 0)')
        expect(el).to.have.css('text-align', 'center')
    })


})

Cypress.Commands.add('footerFirstNameError', () => {
    //Tests for First Name error text
    cy.get('#validation_message_1_7').then((el) => {
        expect(el).to.have.text('This field is required. Please complete the following fields: First.')
        expect(el).to.have.css('color', 'rgb(121, 0, 0)')
        expect(el).to.have.css('font-family', '"Cantora One", Helvetica, Arial, Lucida, sans-serif')
        expect(el).to.have.css('font-size', '11.382px')
        expect(el).to.have.css('font-weight', '700')
        expect(el).to.have.css('line-height', '26px')

    })
    //Tests for the Name container
    cy.get('#field_1_7').then((el) => {
        expect(el).to.have.css('background-color', 'rgba(255, 223, 224, 0.25)')
        expect(el).to.have.css('border-bottom-color', 'rgb(200, 151, 151)')
        expect(el).to.have.css('border-bottom-width', '1px')
        expect(el).to.have.css('border-right-color', 'rgb(102, 102, 102)')
        expect(el).to.have.css('border-right-width', '0px')
        expect(el).to.have.css('border-left-color', 'rgb(102, 102, 102)')
        expect(el).to.have.css('border-left-width', '0px')
        expect(el).to.have.css('border-top-color', 'rgb(200, 151, 151)')
        expect(el).to.have.css('border-top-width', '1px')
        expect(el).to.have.css('width', '205.90625px')
        expect(el).to.have.css('text-align', 'left')
        expect(el).to.have.css('padding-top', '8px')
        expect(el).to.have.css('padding-bottom', '6px')
    })


})

