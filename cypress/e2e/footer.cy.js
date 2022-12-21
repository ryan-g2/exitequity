/// <reference types="cypress"/>
describe('Footer Tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Verify form exists in footer", { tags: ['bvt', 'smoke'] }, () => {
        cy.get('footer').find('.et_pb_row_0_tb_footer').should('exist')
        cy.get('.et_pb_row_0_tb_footer').find('form').should('exist')
        cy.get('.et_pb_row_0_tb_footer').find('#gform_submit_button_1').contains('Submit').should('exist').and('be.enabled')
    })

    it("Make sure contact info is correct", { tags: ['bvt', 'smoke'] }, () => {
        cy.get('.et_pb_text_4_tb_footer .et_pb_text_inner').find('a').eq(0).should('contain', '(425) 462-5819')
        cy.get('.et_pb_text_4_tb_footer .et_pb_text_inner').find('a').eq(1).should('contain', 'info@exitequity.com')
        cy.get('.et_pb_text_4_tb_footer .et_pb_text_inner').find('a').eq(2).should('contain', 'M-F: 8am-6pm')
    })

    it("Make sure social buttons exist and point to correct targets", { tags: 'smoke' }, () => {
        cy.get('.et_pb_column_2_tb_footer ul').find('a').eq(0)
            .should('have.attr', 'href', 'https://www.facebook.com/ExitEquity/')
            .and('exist')
            .and('have.attr', 'target', '_blank')
        cy.get('.et_pb_column_2_tb_footer ul').find('a').eq(1)
            .should('have.attr', 'href', 'https://www.linkedin.com/company/exit-equity')
            .and('exist')
            .and('have.attr', 'target', '_blank')
    })

})
