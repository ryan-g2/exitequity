/// <reference types="cypress"/>
import '../support/homePage/helpers'

describe('HomePage Tests', { tags: ['full'] }, () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('#testimonials').click({force: true}) // This is to trigger loading b.c of lazy loading
    })

    it.only("Verify image header elements work correctly", { tags: [] }, () => {
    //Main blurb in header
        cy.get('.et_pb_section_0').find('h1').then(($el) => {
            expect($el).to.have.text('Start your next chapter')
            expect($el).to.have.css('color', 'rgb(51, 77, 66)')
            expect($el).to.have.css('font-size', '54px')
            expect($el).to.have.css('font-family', 'Montserrat, Helvetica, Arial, Lucida, sans-serif')
        })
        //Paragraph text in header
        cy.get('.et_pb_section_0').find('p').then(($el) => {
            expect($el).to.contain.text('Exit Planning, Valuation, M&A Advisory for Lower Middle Market Business Owners')
            expect($el).to.have.css('color', 'rgb(0, 0, 0)')
            expect($el).to.have.css('font-size', '20px')
            expect($el).to.have.css('text-align', 'left')
            expect($el).to.have.css('font-family', 'Oswald, Helvetica, Arial, Lucida, sans-serif')
            expect($el).to.have.prop('outerHTML', '<p>Exit Planning, Valuation, M&amp;A Advisory <br>for Lower Middle Market Business Owners</p>')
        })

        //Another way to query the string to make sure the line break is in the correct place - not checking for the rest of the string
        cy.get('.et_pb_section_0').find('p').invoke('prop', 'outerHTML').then(($el) => {
            expect($el).to.contain('Advisory <br>for Lower')
        })

        //Test buttons in header image-blurb
        cy.get('.et_pb_section_0').find('.et_pb_row_inner').find('a').then((el) => {
            cy.headerButtons(el)
        })

        cy.get('.et_pb_section_0').find('.et_pb_row_inner').find('a').then((el) => {//<--does allow for [0] notation
                    expect(el[0]).to.have.text('Sell your Business')
                    expect(el[0]).to.have.css('font-size', '15px')//<--test is here since it is easier code-wise, element font sizes are not the same
                    expect(el[1]).to.have.text('Buy a Business')
                    expect(el[1]).to.have.css('font-size', '16px')//<--test is here since it is easier code-wise, element font sizes are not the same
                })
    })

    it.only("Verify  services elements work correctly", { tags: [] }, () => {
        //Test icons
        cy.get('.et_pb_row_1').find('.et-pb-icon').then((el) => {
                expect(el).to.have.css('color', 'rgb(255, 255, 255)')
                expect(el).to.have.css('background-color', 'rgb(51, 77, 66)')
        })

        //Test text
        cy.get('.et_pb_row_1').find('h4').find('span').then((el) => {
                expect(el).to.have.css('color', 'rgb(51, 51, 51)')
                expect(el).to.have.css('font-size', '22px')
                expect(el).to.have.css('font-family', 'Montserrat, Helvetica, Arial, Lucida, sans-serif')
                expect(el).to.have.css('overflow-wrap', 'break-word')
                expect(el).to.have.css('line-height', '22px')
                expect(el).to.have.css('text-align', 'center')
                expect(el[0]).to.have.text('Business Valuation')
                expect(el[1]).to.have.text('Sell A Business')
                expect(el[2]).to.have.text('Buy A Business')
                cy.get(el).parent().should('have.css', 'padding-bottom', '10px')
        })

        //Test buttons
        cy.get('.et_pb_row_1').find('a').then((el) => {
            cy.serviceButtons(el)
        })

    })

    it("Verify blurb elements work correctly", { tags: [] }, () => {

    })

    it("Verify explore elements work correctly", { tags: [] }, () => {

    })

    it("Verify exit plan elements work correctly", { tags: [] }, () => {

    })

    it("Verify current offering elements work correctly", { tags: [] }, () => {

    })

    it("Verify previous listing elements work correctly", { tags: [] }, () => {

    })
 })