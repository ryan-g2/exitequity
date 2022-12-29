/// <reference types="cypress"/>
import '../support/footer/helpers'

describe('Footer Tests', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('#testimonials').click({force: true}) // This is to trigger loading b.c of lazy loading
    })

    it("Verify blurb exists in footer", { tags: ['bvt', 'smoke'] }, () => {
        cy.get('footer').find('.et_pb_column_0_tb_footer').should('exist')
        cy.get('.et_pb_column_0_tb_footer').find('img').click().then((el) => {//The 'click' here is to get the img to load b.c. of lazy loading
            expect(el).to.have.attr('src', 'https://exitequity.com/wp-content/uploads/2021/11/logo_horiz-wht-300x35.png')
            cy.get('[src="https://exitequity.com/wp-content/uploads/2021/11/logo_horiz-wht-300x35.png"]').should('be.visible')
        })
    })

    it("Verify form exists in footer", { tags: ['bvt', 'smoke'] }, () => {
        cy.get('footer').find('.et_pb_column_1_tb_footer').find('form').should('exist')
        cy.get('.et_pb_row_0_tb_footer').find('#gform_submit_button_1').contains('Submit').should('exist').and('be.enabled')
    })

    it("Verify contact info exists in footer", { tags: ['bvt', 'smoke'] }, () => {
        cy.get('footer').find('.et_pb_column_2_tb_footer').as('contactFooter').should('exist')
        cy.get('@contactFooter').contains('Contact')
    })

    it("Verify blurb info appears correctly", { tags: ['bvt', 'smoke'] }, () => {
        //Test that the logo appears correctly
        cy.get('.et_pb_column_0_tb_footer').find('img').click().then((el) => {//The 'click' here is to get the img to load b.c. of lazy loading
            expect(el).to.have.attr('src', 'https://exitequity.com/wp-content/uploads/2021/11/logo_horiz-wht-300x35.png')
            cy.get('[src="https://exitequity.com/wp-content/uploads/2021/11/logo_horiz-wht-300x35.png"]').should('be.visible')
            expect(el).to.have.css('background-color', 'rgba(0, 0, 0, 0)')
            expect(el).to.have.attr('height', '35')
            expect(el).to.have.attr('width', '300')
        })
        //Test that that green field appears correctly
        cy.get('.et_pb_column_0_tb_footer').then((el) => {
            expect(el).to.have.css('background-color', 'rgb(51, 77, 66)')
            expect(el).to.have.css('padding-right', '40px')
            expect(el).to.have.css('padding-bottom', '40px')
            expect(el).to.have.css('padding-left', '40px')
            expect(el).to.have.css('padding-top', '40px')
        })
        //Test that the white text appears correctly
        cy.get('.et_pb_column_0_tb_footer').find('.et_pb_text_0_tb_footer').find('p').then((el) => {
            expect(el).to.have.css('color', 'rgb(255, 255, 255)')
            expect(el).to.have.css('font-family', 'Montserrat, Helvetica, Arial, Lucida, sans-serif')
            expect(el).to.have.css('font-size', '16px')
            expect(el).to.have.css('text-align', 'left')
            expect(el).to.have.text('Remember: There are only three times when you can sell your business!When you want to…When you have to…When your heirs do…')
        })
        //Test that the gold text appears correctly
        cy.get('.et_pb_column_0_tb_footer').find('.et_pb_text_1_tb_footer').find('h3').then((el) => {
            expect(el).to.have.css('color', 'rgb(169, 125, 79)')
            expect(el).to.have.css('font-family', 'Glegoo, Georgia, "Times New Roman", serif')
            expect(el).to.have.text('So Let’s Get Started')
            expect(el).to.have.css('font-size', '24px')
            expect(el).to.have.css('text-transform', 'uppercase')
            expect(el).to.have.css('text-align', 'left')
        })
    })

    it("Verify footer form appears correctly", { tags: ['bvt', 'smoke'] }, () => {
        //Tests for the column title
        cy.get('.et_pb_row_0_tb_footer').find('.et_pb_text_2_tb_footer').find('h3').scrollIntoView().then((el) => {
            expect(el).to.have.text('Send Us A Message')
            expect(el).to.have.css('color', 'rgb(169, 125, 79)')
            expect(el).to.have.css('font-family', 'Glegoo, Georgia, "Times New Roman", serif')
            expect(el).to.have.css('font-size', '24px')
            expect(el).to.have.css('text-transform', 'uppercase')
            expect(el).to.have.css('text-align', 'left')

        })
        //Tests for the 'Name' element
        cy.get('.et_pb_row_0_tb_footer').find('#field_1_7').scrollIntoView().as('nameLabel')
            .find('label').eq(0).should('have.text', 'Name*')
        cy.testForStar('@nameLabel')
        // Tests for 'First' element
        cy.get('.et_pb_row_0_tb_footer').find('#input_1_7_3_container').as('firstLabel')
            .find('label').should('have.text', 'First')
        cy.testInputCSS('@firstLabel')
        // Tests for 'Last' element
        cy.get('.et_pb_row_0_tb_footer').find('#input_1_7_6_container').as('lastLabel')
            .find('label').should('have.text', 'Last')
        cy.testInputCSS('@lastLabel')
        //Tests for the 'Company' element
        cy.get('.et_pb_row_0_tb_footer').find('#field_1_9').as('companyLabel')
            .find('label').eq(0).should('have.text', 'Company*')
        cy.testForStar('@companyLabel')
        cy.testInputCSS('@companyLabel')
        //Tests for the 'Mobile Phone' element
        cy.get('.et_pb_row_0_tb_footer').find('#field_1_10').as('mobileLabel')
            .find('label').eq(0).should('have.text', 'Mobile Phone Number (for Confidentiality)*')
        cy.testForStar('@mobileLabel')
        cy.testInputCSS('@mobileLabel')
        //Tests for the 'Email' element
        cy.get('.et_pb_row_0_tb_footer').find('#field_1_11').as('emailLabel')
            .find('label').eq(0).should('have.text', 'Email*')
        cy.testForStar('@emailLabel')
        cy.testInputCSS('@emailLabel')
        // Tests for 'Message' element
        cy.get('.et_pb_row_0_tb_footer').find('#field_1_12').as('messageLabel')
            .find('label').eq(0).should('have.text', 'Message')
        cy.get('@messageLabel').find('textarea').then(($el) => {
            expect($el).to.have.text('type message here...')
            expect($el).to.have.class('textarea medium')
            expect($el).to.not.have.attr('aria-required')
            expect($el).to.have.attr('rows', '10')
            expect($el).to.have.attr('cols', '50')
        })
        // Tests for 'Captcha' element
        cy.get('.et_pb_row_0_tb_footer').find('#field_1_13').find('iframe').scrollIntoView().then(($el) => {
            expect($el).to.exist
            cy.get($el).should('be.visible')
            expect($el).to.have.attr('title', 'reCAPTCHA')
        })
        cy.get('.et_pb_row_0_tb_footer').find('#gform_submit_button_1').contains('Submit').should('exist').and('be.enabled')
    })

    it("Verify contact info appears correctly", { tags: ['bvt', 'smoke'] }, () => {
        cy.get('footer').find('.et_pb_column_2_tb_footer').find('.et_pb_text_inner').as('contactFooterInfo')
        cy.testContactHeaders('h4', 'Contact', 'rgb(255, 255, 255)', '14px')
        cy.testContactHeaders('h3', 'Get In Touch', 'rgb(169, 125, 79)', '24px')
        cy.testContactText('(425) 462-5819', '0')
        cy.testContactText('info@exitequity.com', '1')
        cy.testContactText('M-F: 8am-6pm', '2')
        cy.testContactIcon('0', 'Follow on Facebook', 'https://www.facebook.com/ExitEquity/')
        cy.testContactIcon('1', 'Follow on LinkedIn', 'https://www.linkedin.com/company/exit-equity')

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

    // it("Tests for correct error messages when submitting form (form not filled out at all)", { tags: 'smoke' }, () => {
    //
    // })
    //
    // it("Perhaps tests for errors on individual inputs while all others are correct.", { tags: 'smoke' }, () => {
    //
    // })
    //
    // it("Tests to make sure the F on In icons in footer are not green color like other buttons", { tags: 'smoke' }, () => {
    // content CSS code points to the social icon graphic
    //Can test background and text color
    // })

})
