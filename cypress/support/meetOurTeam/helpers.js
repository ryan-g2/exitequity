// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('testCommand', ($el) => {
   cy.log("hi")
})

Cypress.Commands.add('testAnimationsNameFirst', ($el) => {
   //Getting persons' name
   cy.get($el).children('div').first().children('div').first().find('h2').parent().parent().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' blurb
   cy.get($el).children('div').first().children('div').last().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' img
   cy.get($el).find('img').parent().parent().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')

   //Getting persons' name
   cy.get($el).children('div').first().children('div').first().find('h2').scrollIntoView().parent().parent().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' blurb
   cy.get($el).children('div').first().children('div').last().scrollIntoView().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' img
   cy.get($el).find('img').scrollIntoView().parent().parent().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
})

Cypress.Commands.add('testAnimationsImgFirst', ($el) => {
   //Getting persons' image
   cy.get($el).children('div').first().children('div').first().find('img').parent().parent().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' name
   cy.get($el).children('div').last().children('div').first().find('h2').parent().parent().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' blurb
   cy.get($el).children('div').last().children('div').last().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')

   //Getting persons' image
   cy.get($el).children('div').first().children('div').first().find('img').scrollIntoView().parent().parent().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' name
   cy.get($el).children('div').last().children('div').first().find('h2').parent().parent().scrollIntoView().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
   //Getting persons' blurb
   cy.get($el).children('div').last().children('div').last().scrollIntoView().should('have.class', 'et_animated').and('not.have.class', 'et_had_animation')
})
