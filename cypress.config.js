const xlsx = require('node-xlsx').default;
const fs = require('fs'); // for file
const path = require('path'); // for file path

module.exports = {
  projectId: 'a6byq7',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
  video: false,
  // reporter: "mochawesome",

  // for cypress-mochawesome-reporter -- html report with screenshots
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
      //for mochawesme report with screenshots
      require('cypress-mochawesome-reporter/plugin')(on);

      //for tags to segregate smoke/regression
      require('cypress-grep/src/plugin')(config);

      //to fetch data from xlsx
      on('task', {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
    },
    specPattern: 'cypress/e2e/*.js'
  },
};
