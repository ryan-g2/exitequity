// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('testCommand', () => {
   cy.log("hi")
})

Cypress.Commands.add('testAnimationsNameFirst', ($el) => {
   //This command tests the bios with their names listed first to make sure the correct elements have animations and that the animations also fire
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
   //This command tests the bios with their names listed first to make sure the correct elements have animations and that the animations also fire
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
