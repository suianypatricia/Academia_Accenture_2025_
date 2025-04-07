
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/home.page'
import './pages/InsurantPage'
import './pages/PricePage'
import './pages/ProductPage'
import './pages/QuotePage'
import './pages/VehiclePage'
import './pages/home.page'



Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Ignora qualquer erro de JavaScript não tratado
  })
