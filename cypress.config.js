const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: "http://localhost:3000/",
    supportFile: 'cypress/support/e2e.js',
  },
});
