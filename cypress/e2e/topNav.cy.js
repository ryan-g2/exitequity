describe('Group', () => {

    beforeEach(() => {
    })

    it("Test", () => {
        cy.visit('/')
        cy.get('#menu-prim-menu').children().each(($el) => {

            cy.log($el.text())
        })
        cy.get('ul#menu-prim-menu > .et_pb_menu_page_id-193.menu-item.menu-item-193.menu-item-has-children.menu-item-object-custom.menu-item-type-custom > ul')
            .children().each(($el) => {

            cy.log($el.text())
                })
        cy.get('#menu-prim-menu').children().first().invoke('text').then((name) => {
            cy.log(JSON.stringify(name))
        })
        // cy.get('a').contains('Sell your Business')
        // // cy.get(".et_pb_menu_page_id-67 menu-item menu-item-type-post_type menu-item-object-page menu-item-84").eq(0).click({force:true})
        // cy.get('a').contains('The Process').eq(0).click({force:true})


    })
})
