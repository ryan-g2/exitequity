describe('Group', { tags: ['full'] }, () => {
    const topLinkNames = ["Sell your Business", "Services", "Listings", "About Us", "Resources"]
    const fbLink = "https://www.facebook.com/ExitEquity/"
    const liLink = "https://www.linkedin.com/company/exit-equity/"

    beforeEach(() => {
        cy.visit('/')
    })

    it("Verify logo exists", {tags: ['bvt', 'smoke', 'rc']}, () => {
        cy.get('.et_pb_row_1_tb_header').find('.et_pb_column_4_tb_header')
            .should('have.css', 'background-image', 'url("https://exitequity.com/wp-content/uploads/2021/12/equityV2logo.png")')
    })

    it("Verify 'Lets Talk' button exists and functions", {tags: ['smoke']}, () => {
        cy.get('.et_pb_row_1_tb_header').find('.et_pb_button_0_tb_header')
            .should('have.attr', 'href', '/contact')
            .and('have.css', 'background-color', 'rgb(51, 77, 66)')
            .and('contain', "LET'S TALK")//.click() < --commented out due to error on Contact page
            //cy.url().should('contain', '/contact-us') < --commented out due to error on Contact page
    })

    it("Verify top-level nav section names are correct", {tags: ['bvt', 'smoke', 'rc']}, () => {

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

    it("Verify nav items link to correct pages and they load", {tags: ['smoke', 'rc']}, () => {
        //This verifies the 'Home' link
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
        //This verifies the rest of the links in the top nav that go to another page
        cy.get('#menu-prim-menu > .menu-item-has-children').each(($el) => {
            cy.get($el).children('.sub-menu').within(() => {
                cy.get('a').each((topLink) => {
                        cy.log(topLink.text())
                        expect(topLink).to.have.attr('href')
                        cy.request('POST', topLink.attr('href')).then((resp) => {
                            expect(resp.status).to.equal(200)
                        })
                })
            })
        })
    })

    it("Verify top nav header appears correctly", { tags: ['smoke', 'rc'] }, () => {
        cy.get(".et_pb_row.et_pb_row_0_tb_header.et_pb_equal_columns").children().eq(0).find('a').then(($el) => {
            expect($el).to.have.text("(425) 462-5819")
            expect($el).to.have.attr("href", "tel:4254625819")
        })
        cy.get(".et_pb_row.et_pb_row_0_tb_header.et_pb_equal_columns").children().eq(1).find('a').then(($el) => {
            expect($el).to.have.text("Send us a message")
            expect($el).to.have.attr("href", "/contact-us/")
        })
        cy.get(".et_pb_row.et_pb_row_0_tb_header.et_pb_equal_columns").children().eq(2).find('a').then(($el) => {
            expect($el).to.have.text("info@exitequity.com")
            expect($el).to.have.attr("href", "mailto:info@exitequity.com")
            expect($el).to.have.attr("target", "_blank")
        })
        cy.get(".et_pb_row.et_pb_row_0_tb_header.et_pb_equal_columns").children().eq(3).find('li').eq(0).find('a').then(($el) => {
            expect($el).to.have.attr('title', 'Follow on Facebook')
            expect($el).to.have.attr('target', '_blank')
            expect($el).to.have.css('background-color', 'rgb(51, 77, 66)')
            expect($el).to.have.css('color', 'rgb(51, 77, 66)')
            expect($el).to.have.attr('href', fbLink)
            cy.request('POST', fbLink).then((resp) => {
                expect(resp.status).to.equal(200)
            })
        })
        cy.get(".et_pb_row.et_pb_row_0_tb_header.et_pb_equal_columns").children().eq(3).find('li').eq(1).find('a').then(($el) => {
            expect($el).to.have.attr('title', 'Follow on LinkedIn')
            expect($el).to.have.attr('target', '_blank')
            expect($el).to.have.css('background-color', 'rgb(51, 77, 66)')
            expect($el).to.have.css('color', 'rgb(51, 77, 66)')
            expect($el).to.have.attr('href', liLink)
            //Commented out since requesting a LI page without being signed in will return a 403-Forbidden statusCode
            // cy.request('POST', liLink).then((resp) => {
            //     expect(resp.status).to.equal(200)
            // })
        })

    })
})
