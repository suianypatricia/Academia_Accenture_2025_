import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

// Página inicial
Given('que o usuário esteja na pagina inicial do Tricentis', () => {
    cy.visit('/')
    cy.get('#nav_automobile').should('be.visible')
    cy.log('✅ Página inicial carregada com sucesso!')
  })
  
// Aba "Automobile"
When('clica na opção Automobile', () => {
    cy.get('#nav_automobile').click()
    cy.contains('Enter Vehicle Data', { timeout: 10000 }).should('be.visible') // aguarda até 10s
    cy.log('✅ Aba "Automobile" acessada com sucesso!')
  })
  

// Aba "Enter Vehicle Data"
And('preenche a aba Enter Vehicle Data', () => {
  cy.enterVehicleData()
  cy.irParaInsurantData()
})

// Aba "Enter Insurant Data"
And('preenche a aba Enter Insurant Data', () => {
  cy.enterInsurantData()
  cy.irParaEnterProductData()
})

// Aba "Enter Product Data"
And('preenche a aba Enter Product Data', () => {
  cy.enterProductData()
  cy.irParaSelectPriceOption()
})

// Aba "Select Price Option"
And('seleciona uma opcao em Select Price Option', () => {
    cy.enterPriceOption()
    cy.irParaQuotePage()
  })
  
// Aba "Send Quote"
And('envia a cotacao em Send Quote', () => {
  cy.enterSendQuote()
})

// Validação final (Then)
Then('exibira mensagem de sucesso', () => {
  cy.get('.sweet-alert', { timeout: 10000 })
    .should('be.visible')
    .contains('Sending e-mail success!')

  // Espera o botão "OK" estar presente e visível antes de clicar
  cy.get('.confirm', { timeout: 5000 })
    .should('exist')
    .and('be.visible')
    .click({ force: true }) // força o clique para garantir, caso ele fique instável

  cy.log('✅ Mensagem de sucesso validada com sucesso!')
})

