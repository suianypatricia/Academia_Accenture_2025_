const seletoresPRODUCT = {
    INPUT_startdate: '#startdate',
    SELETOR_insurancesum: '#insurancesum',
    SELETOR_meritrating: '#meritrating',
    SELETOR_damageinsurance: '#damageinsurance',
    RADIO_optionalproducts: '#EuroProtection',
    SELETOR_courtesycar: '#courtesycar'
}

Cypress.Commands.add('enterProductData', () => {
    cy.get(seletoresPRODUCT.INPUT_startdate)
        .type('06/05/2025')
        .should('have.value', '06/05/2025')
    cy.get(seletoresPRODUCT.SELETOR_insurancesum)
        .select('7.000.000,00')
        .should('have.value', '7000000') 
    cy.get(seletoresPRODUCT.SELETOR_meritrating)
        .select('Bonus 1')
        .should('have.value', 'Bonus 1')
    cy.get(seletoresPRODUCT.SELETOR_damageinsurance)
        .select('No Coverage')
        .should('have.value', 'No Coverage')
    cy.get(seletoresPRODUCT.RADIO_optionalproducts)
        .click({ force: true })
        .should('be.checked')
    cy.get(seletoresPRODUCT.SELETOR_courtesycar)
        .select('No')
        .should('have.value', 'No')

    cy.log('✅ Preenchimento da aba "Product Data" concluído')
})

const BTN_next = '#nextselectpriceoption'

Cypress.Commands.add('irParaSelectPriceOption', () => {
  cy.get(BTN_next).click()
  cy.contains('Select Price Option').should('be.visible')
  cy.log('✅ Avançou para aba "Select Price Option"')
})

