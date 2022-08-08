module.exports = {
  projectId: 'a6byq7',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
  reporter: 'mochawesome',
  video: true,
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  retries: {
    runMode: 0,
    openMode: 1
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
};
