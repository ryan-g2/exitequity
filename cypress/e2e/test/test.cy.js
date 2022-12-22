/// <reference types="cypress"/>

describe('Group', () => {

    beforeEach(() => {
        cy.visit('/meet-our-team/')

    })

    it("Test", () => {

        const nameFirst = ['.et_pb_row_2', '.et_pb_row_3', '.et_pb_row_6']
        nameFirst.forEach(($el) => {
            cy.testAnimationsNameFirst($el)
        })

    })

    it.only("Test2", () => {
        // const imgFirst = ['.et_pb_row_4', '.et_pb_row_5', '.et_pb_row_7', '.et_pb_row_8']
        //
        // imgFirst.forEach(($el) => {
        //     cy.testAnimationsImgFirst($el)
        // })
        cy.testCommand()

    })
})
