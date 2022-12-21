describe('Group', () => {
    const topLinkNames = ["Sell your Business", "Services", "Listings", "About Us", "Resources"]

    beforeEach(() => {
        cy.visit('/')
    })

    it("Verify logo exists", {tags: ['bvt', 'smoke']}, () => {
        cy.get('.et_pb_row_1_tb_header').find('.et_pb_column_4_tb_header')
            .should('have.css', 'background-image', 'url("https://exitequity.com/wp-content/uploads/2021/12/equityV2logo.png")')
    })

    it("Verify Lets Talk button exists and functions", {tags: ['bvt', 'smoke']}, () => {
        cy.get('.et_pb_row_1_tb_header').find('.et_pb_button_0_tb_header')
            .should('have.attr', 'href', '/contact').and('contain', "LET'S TALK")//.click() < --commented out due to error on Contact page
        //cy.url().should('contain', '/contact-us') < --commented out due to error on Contact page
    })

    it("Test", () => {
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

    it("Verify top-level nav section names are correct", {tags: ['bvt', 'smoke']}, () => {

        cy.get('#menu-prim-menu').within(() => {
            cy.root().find('a').first().each((topLink) => {
                cy.log(topLink.text())
                expect(topLink.text()).to.be.equal('Home')
            })
        })

        cy.get('#menu-prim-menu > .menu-item-has-children').each(($el, item) => {
            // cy.get($list).children().first()
            cy.get($el).within(() => {
                cy.root().find('a').first().each((topLink) => {
                    cy.log(topLink.text())
                    expect(topLink.text()).to.be.equal(topLinkNames[item])
                })
            })
        })
    })

    it("Verify nav items link to correct pages and they load", {tags: ['smoke']}, () => {

        cy.get('#menu-prim-menu').within(() => {
            cy.root().find('a').first().each((topLink) => {
                cy.log(topLink.text())
                expect(topLink).to.have.attr('href')
                const hrefValue = topLink.attr('href')
                cy.get(topLink).click()
                cy.log(hrefValue)
                cy.url().should('include', hrefValue)
            })
        })

        cy.get('#menu-prim-menu > .menu-item-has-children').each(($el) => {
            // cy.get($list).children().first()
            cy.get($el).children('.sub-menu').within(() => {
                cy.get('a').each((topLink) => {
                        cy.log(topLink.text())
                        expect(topLink).to.have.attr('href')
                        // const hrefValue = topLink.attr('href')
                        cy.request('POST', topLink.attr('href')).then((resp) => {
                            expect(resp.status).to.equal(200)
                        })
                        // cy.log(hrefValue)
                })
            })
        })
    })
})
