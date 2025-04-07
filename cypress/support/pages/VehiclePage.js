const seletoresCAR = {
    SELETOR_make: '#make',
    INPUT_engineperformance: '#engineperformance',
    SELETOR_dateofmanufacture: '#dateofmanufacture',
    SELETOR_numberofseats: '#numberofseats',
    SELETOR_fueltype: '#fuel',
    INPUT_listprice: '#listprice',
    INPUT_licenseplatenumber: '#licenseplatenumber',
    INPUT_annualmileage: '#annualmileage',
  };
  
  const BTN_next = '#nextenterinsurantdata';
  
  Cypress.Commands.add('enterVehicleData', () => {
    cy.log('🔧 Preenchendo dados do veículo');
  
    cy.get(seletoresCAR.SELETOR_make).select('Honda').should('have.value', 'Honda');
    cy.get(seletoresCAR.INPUT_engineperformance).type('1000').should('have.value', '1000');
    cy.get(seletoresCAR.SELETOR_dateofmanufacture).type('04/11/2024').should('have.value', '04/11/2024');
    cy.get(seletoresCAR.SELETOR_numberofseats).select('4').should('have.value', '4');
    cy.get(seletoresCAR.SELETOR_fueltype).select('Gas').should('have.value', 'Gas');
    cy.get(seletoresCAR.INPUT_listprice).type('54321').should('have.value', '54321');
    cy.get(seletoresCAR.INPUT_licenseplatenumber).type('2025').should('have.value', '2025');
    cy.get(seletoresCAR.INPUT_annualmileage).type('2025').should('have.value', '2025');
  
    cy.log('✅ Dados do veículo preenchidos com sucesso');
  });
  
  Cypress.Commands.add('irParaInsurantData', () => {
    cy.log('👉 Indo para aba "Enter Insurant Data"');
    cy.get(BTN_next).click();
    cy.contains('Enter Insurant Data').should('be.visible');
    cy.log('✅ Navegação para "Enter Insurant Data" confirmada');
  });
  

