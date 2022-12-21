const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    watchForFileChanges: false,
    trashAssetsBeforeRuns: true,
    waitForAnimations: true,
    baseUrl: 'https://exitequity.com/',
    video: false
  },
});
