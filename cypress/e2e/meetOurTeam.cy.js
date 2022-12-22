/// <reference types="cypress"/>
describe('Testing the "Meet our Team" page', () => {

    beforeEach(() => {
        cy.visit('/meet-our-team/')
    })

    it("Verify header image and text is correct", () => {
        cy.get('.et_pb_section_0')
            .should('have.css', 'background-image', 'url("https://exitequity.com/wp-content/uploads/2021/10/Exit-Equity18.jpg")')
        cy.get('.et_pb_section_0').find('h1').should('contain', 'Meet our Team')
        cy.get('.et_pb_section_0').find('.et_pb_text_inner').find('p')
            .should('contain', 'Providing M&A Advisory Services for Small to Mid Size Companies')
    })

    it("Verify animations occur on Name-First bios", () => {
        const nameFirst = ['.et_pb_row_2', '.et_pb_row_3', '.et_pb_row_6']
        nameFirst.forEach(($el) => {
            cy.testAnimationsNameFirst($el)
        })
    })

    it("Verify animations occur on Img-First bios", () => {
        const imgFirst = ['.et_pb_row_4', '.et_pb_row_5', '.et_pb_row_7', '.et_pb_row_8']

        imgFirst.forEach(($el) => {
            cy.testAnimationsImgFirst($el)
        })
    })

})
