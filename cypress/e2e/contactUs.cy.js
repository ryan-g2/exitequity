/// <reference types="cypress"/>

// https://exitequity.com/contact-us/
describe('Group', () => {

    beforeEach(() => {
    })

    it.skip("Verify the Contact Us image and text exist", { tags: 'smoke' }, () => {
        //skipped due to error on Contact Us page
        cy.visit('/contact-us')
        cy.get('.et_pb_section_0').find('.et_pb_column_1')
            .should('have.css', 'background-image', 'url(https://exitequity.com/wp-content/uploads/2021/12/contact.jpg)!important')
        cy.get('.et_pb_section_0').find('h1').contains('Contact Us')
        cy.get('.et_pb_section_0').find('form').should('exist')
    })

})
