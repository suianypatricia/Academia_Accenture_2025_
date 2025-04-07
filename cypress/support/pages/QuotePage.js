const seletoresQUOTE = {
    INPUT_email: '#email',
    INPUT_phone: '#phone',
    INPUT_username: '#username',
    INPUT_password: '#password',
    INPUT_confirmpassword: '#confirmpassword',
    BTN_sendemail: '#sendemail'
  }
  
  // Comando para preencher os campos da página Send Quote
  Cypress.Commands.add('enterSendQuote', () => {
    const EMAIL = 'academia2025_cypress@teste.com'
    const PHONE = '81999999999'
    const USERNAME = 'Suiany'
    const SENHA_FORTE = 'Qa@2025teste' // senha com maiúscula, minúscula, número e caractere especial
  
    cy.get(seletoresQUOTE.INPUT_email)
        .type(EMAIL)
        .should('have.value', EMAIL)
  
    cy.get(seletoresQUOTE.INPUT_phone)
        .type(PHONE)
        .should('have.value', PHONE)
  
    cy.get(seletoresQUOTE.INPUT_username)
        .type(USERNAME)
        .should('have.value', USERNAME)
  
    cy.get(seletoresQUOTE.INPUT_password)
        .type(SENHA_FORTE)
        .should('have.value', SENHA_FORTE)
  
    cy.get(seletoresQUOTE.INPUT_confirmpassword)
        .type(SENHA_FORTE)
        .should('have.value', SENHA_FORTE)
  
    cy.get(seletoresQUOTE.BTN_sendemail).click()
  
    // Validação da mensagem de sucesso no popup
    cy.get('.sweet-alert', { timeout: 10000 }) // espera até 10s
        .should('be.visible')
        .contains('Sending e-mail success!') // valida a mensagem dentro do popup
  
    cy.get('.confirm').click() // clica no botão "OK"
    cy.log('✅ Cotação enviada com sucesso!')
  })
  
  