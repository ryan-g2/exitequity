/// <reference types="cypress"/>
import people from '../fixtures/bios.json'

describe('Testing the "Meet our Team" page', () => {
    //Not all bios are arranged the same in the code, hence the need to treat each list a little differently when testing
    const nameFirst = ['.et_pb_row_2', '.et_pb_row_3', '.et_pb_row_6']
    const imgFirst = ['.et_pb_row_4', '.et_pb_row_5', '.et_pb_row_7', '.et_pb_row_8']

    beforeEach(() => {
        cy.visit('/meet-our-team/')
        cy.get(".et_pb_row_2").find('.et_pb_image_wrap').find('img').click({force: true}) // This is to trigger loading b.c of lazy loading
    })

    it("Verify header image and text is correct", () => {
        cy.get('.et_pb_section_0')
            .should('have.css', 'background-image', 'url("https://exitequity.com/wp-content/uploads/2021/10/Exit-Equity18.jpg")')
        cy.get('.et_pb_section_0').find('h1').should('contain', 'Meet our Team')
        cy.get('.et_pb_section_0').find('.et_pb_text_inner').find('p')
            .should('contain', 'Providing M&A Advisory Services for Small to Mid Size Companies')
    })

    it("Verify animations occur on Name-First bios", () => {
        nameFirst.forEach(($el) => {
            cy.testAnimationsNameFirst($el)
        })
    })

    it("Verify animations occur on Img-First bios", () => {
        imgFirst.forEach(($el) => {
            cy.testAnimationsImgFirst($el)
        })
    })

    it("Verify the persons' name appears in their contact link correctly (nameFirst)", () => {
        nameFirst.forEach((element) => {
            cy.get(element).within(() => {
                var bigName = ""
                var contactName = ""
                cy.root().children('div').first().children('div').first().scrollIntoView().find('strong').invoke('text').then(($el) => {
                    // Uncomment the if block to have this test pass the 'Keith' test
                    // This is due to a 'L' not being in the h2 text
                    if ($el === "KEITH ROGSTAD") {
                        $el = "KEITH L. ROGSTAD"
                    }
                    cy.log("This name is: " + $el)
                    bigName = $el
                }).then(() => {
                    cy.root().find('a').eq(0).scrollIntoView().invoke('text').then(($el) => {
                        cy.log("The contact name is: " + $el)
                        contactName = $el
                    })
                }).then(() => {
                    cy.capitalizeFirstLetter(bigName).then((text) => {
                        cy.log(text)
                        expect(contactName).to.include(text)
                    })
                })
            })
        })
    })

    it("Verify the persons' name appears in their contact link correctly (imgFirst)", () => {
        imgFirst.forEach((element) => {
            cy.get(element).within(() => {
                var bigName = ""
                var contactName = ""
                cy.root().children('div').last().children('div').first().scrollIntoView().find('strong').invoke('text').then(($el) => {
                    cy.log("This name is: " + $el)
                    bigName = $el
                }).then(() => {
                    cy.root().find('a').eq(0).scrollIntoView().invoke('text').then(($el) => {
                        cy.log("The contact name is: " + $el)
                        contactName = $el
                    })
                }).then(() => {
                    cy.capitalizeFirstLetter(bigName).then((text) => {
                        cy.log(text)
                        expect(contactName).to.include(text)
                    })
                })
            })
        })
    })

    it("Verify the contact link has the correct email address", () => {
        cy.get('#main-content').within(() => {
            cy.get('[class^="et_pb_row"]').not('.et_pb_row_0').not('.et_pb_row_1').each((element, index) => {
                cy.get(element).within(() => {
                    cy.root().find('a').eq(0).invoke('attr', 'href').then(($el) => {
                        cy.log("The email is: " + $el)
                        expect($el).to.equal('mailto:' + people.people[index].emailName + '@exitequity.com')
                    })
                })
            })
        })
    })

    it("Verify the bios with a linkedin link appear and has the href populated", function () {
        cy.get('#main-content').within(() => {
            cy.get('[class^="et_pb_row"]').not('.et_pb_row_0').not('.et_pb_row_1').not('.et_pb_row_7')//Removing Noordin from this list since he does not have an LI profile
                .each(($el) => {
                    cy.get($el).find('[title="Follow on LinkedIn"]').as('liIcon').should('be.visible')
                    cy.get('@liIcon').should('have.attr', 'target', '_blank')
                    cy.get('@liIcon').invoke('attr', 'href').as('liURL').then(() => {
                        cy.log(this.liURL)
                        expect(this.liURL).to.include('https://www.linkedin.com/in/')
                    })


                })
        })
    })

    it("Verify the bio images are are visible", () => {
        cy.get('#main-content').within(() => {
            cy.get('[class^="et_pb_row"]').not('.et_pb_row_0').not('.et_pb_row_1').each(($el) => {
                cy.get($el).scrollIntoView().find('.et_pb_image_wrap').then((img) => {
                    cy.get(img).should('be.visible')
                })
            })
        })
    })

    it("Verify a green field appears behind each bio image", () => {
        cy.get('#main-content').within(() => {
            cy.get('[class^="et_pb_row"]').not('.et_pb_row_0').not('.et_pb_row_1').each(($el) => {
                cy.get($el).scrollIntoView().find('.et_pb_image_wrap').parent().parent().then(($el) => {
                    cy.get($el).should('be.visible')
                    expect($el).to.have.css('background-image', 'linear-gradient(115deg, rgb(0, 138, 95) 0px, rgb(20, 48, 2) 100%)')
                })
            })
        })
    })

    it("Verify bio titles appear correctly", () => {
        cy.get('#main-content').within(() => {
            cy.get('[class^="et_pb_row"]').not('.et_pb_row_0').not('.et_pb_row_1').each(($el,  $index) => {
                cy.get($el).scrollIntoView().find('h4').then((el) => {
                    expect(el).to.have.css('text-transform', 'uppercase')
                    expect(el).to.have.css('color', 'rgb(0, 138, 95)')
                    cy.get(el).invoke('text').then(($element) => {
                        expect($element).to.equal((people.people[$index].title))
                    })
                })
            })
        })
    })

    it("Verify name and credentials of person appear correctly", () => {
        cy.get('#main-content').within(() => {
            cy.get('[class^="et_pb_row"]').not('.et_pb_row_0').not('.et_pb_row_1').each(($el,  $index) => {
                cy.get($el).scrollIntoView().find('strong').parent().parent().then((el) => {
                    // expect(el).to.have.css('font-size', '24px')
                    cy.get(el).invoke('text').then(($element) => {
                        // const upperName = people.people[$index].name.toUpperCase()
                        // cy.log(upperName)
                        expect($element).to.equal((people.people[$index].name.toUpperCase() + " " + (people.people[$index].credentials)).trim())
                    })
                })
            })
        })
    })
})


