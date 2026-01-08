describe('Kvízjáték UI teszt', () => {

  it('Betölti az index.html-t és megjelenik a Start képernyő', () => {
    cy.visit('src/index.html');
    cy.get('#start-screen').should('be.visible');
  });

  it('A játékos beírja a nevét és elindítja a kvízt', () => {
    cy.visit('src/index.html');

    cy.get('#player-name').type('Krisztián');
    cy.get('#start-button').click();

    cy.get('#start-screen').should('not.be.visible');
    cy.get('#quiz-content').should('be.visible');
  });

  it('Megjelenik az első kérdés és a válasz gombok', () => {
    cy.visit('src/index.html');

    cy.get('#player-name').type('Krisztián');
    cy.get('#start-button').click();

    cy.get('#question-text')
        .should('be.visible')
        .and('contain', 'Mi Magyarország fővárosa?');

    cy.get('#answer-buttons button')
        .should('have.length', 4)
        .and('be.visible');
  });

  it('Helyes válasz kiválasztása növeli a pontszámot', () => {
    cy.visit('src/index.html');

    cy.get('#player-name').type('Krisztián');
    cy.get('#start-button').click();

    cy.contains('Budapest').click({ force: true });
    cy.get('#score').should('contain', '1');
  });

  it('A Következő kérdés gomb működik', () => {

    cy.visit('src/index.html');

    cy.get('#player-name').type('Krisztián');
    cy.get('#start-button').click();

    cy.contains('Budapest').click({ force: true });

    cy.get('#next-button')
        .should('be.visible')
        .click();

    cy.get('#question-text')
        .should('contain', 'Hány megyéje van');
  });

});