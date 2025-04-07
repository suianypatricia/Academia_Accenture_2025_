const seletoresPRICE = {
    RADIO_selectGold: '#selectgold',
}

Cypress.Commands.add('enterPriceOption', () => {
    cy.log('📌 Preenchendo aba Select Price Option')

    // Selecionar a opção Gold com validação
    cy.get(seletoresPRICE.RADIO_selectGold)
        .check({ force: true })
        .should('be.checked')

    cy.log('✅ Opção Gold selecionada com sucesso')
})

const BTN_next = '#nextsendquote'

Cypress.Commands.add('irParaQuotePage', () => {
    cy.get(BTN_next).click()
    cy.contains('Send Quote').should('be.visible') 
    cy.log('➡️ Avançou para a aba Send Quote')
})
