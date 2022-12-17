const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    watchForFileChanges: false,
    trashAssetsBeforeRuns: true,
    waitForAnimations: true,
    baseUrl: 'https://exitequity.com/'
  },
});
