const seletoresINSURANT = {
    INPUT_firstname: '#firstname',
    INPUT_lastname: '#lastname',
    INPUT_birthdate: '#birthdate',
    RADIO_gender_female: 'input[name="Gender"][value="Female"]',
    INPUT_streetaddress: '#streetaddress',
    SELECT_country: '#country',
    INPUT_zipcode: '#zipcode',
    INPUT_city: '#city',
    SELECT_occupation: '#occupation',
    CHECK_hobbies_speeding: 'input[type="checkbox"][value="Speeding"]',
    INPUT_website: '#website',
    INPUT_picture: '#picturecontainer',
}



Cypress.Commands.add('enterInsurantData', () => {
    cy.log('🧍 Preenchendo dados do segurado')

    cy.get(seletoresINSURANT.INPUT_firstname).type('Suiany').should('have.value', 'Suiany')
    cy.get(seletoresINSURANT.INPUT_lastname).type('Honorato').should('have.value', 'Honorato')
    cy.get(seletoresINSURANT.INPUT_birthdate).type('08/25/1998').should('have.value', '08/25/1998')
    cy.get(seletoresINSURANT.RADIO_gender_female).check({ force: true }).should('be.checked')
    cy.get(seletoresINSURANT.INPUT_streetaddress).type('Rua Maravilha').should('have.value', 'Rua Maravilha')
    cy.get(seletoresINSURANT.SELECT_country).select('Brazil').should('have.value', 'Brazil')
    cy.get(seletoresINSURANT.INPUT_zipcode).type('25252525').should('have.value', '25252525')
    cy.get(seletoresINSURANT.INPUT_city).type('Recife').should('have.value', 'Recife')
    cy.get(seletoresINSURANT.SELECT_occupation).select('Farmer').should('have.value', 'Farmer')
    cy.get(seletoresINSURANT.CHECK_hobbies_speeding).check({ force: true }).should('be.checked')
    cy.get(seletoresINSURANT.INPUT_website).type('www.suiany.com.br').should('have.value', 'www.suiany.com.br')
    cy.get(seletoresINSURANT.INPUT_picture).selectFile('cypress/fixtures/imagem.jpg', { force: true })
})

Cypress.Commands.add('irParaProductData', () => {
    cy.get(BTN_next).click()
    cy.contains('Enter Product Data').should('be.visible')
})

const BTN_next = '#nextenterproductdata'

Cypress.Commands.add('irParaEnterProductData', () => {
  cy.get(BTN_next).click()
  cy.contains('Enter Product Data').should('be.visible')
  cy.log('✅ Avançou para aba "Product Data"')
})
