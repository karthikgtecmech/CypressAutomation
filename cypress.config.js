module.exports = {
  projectId: 'a6byq7',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
  video: true,
  //reporter: "mochawesome"

  //for cypress-mochawesome-reporter -- html report with screenshots
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true
  },

  env: {
    url: 'https://rahulshettyacademy.com'
  },
  retries: {
    runMode: 0,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/*.js'
  },
};
