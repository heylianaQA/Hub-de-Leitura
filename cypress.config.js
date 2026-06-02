const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
    baseUrl: "http://localhost:3000/",
    supportFile: 'cypress/support/e2e.js',
  },
});
