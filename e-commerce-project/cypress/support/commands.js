// ***********************************************
// Custom commands for e-commerce testing
// ***********************************************

// Add product to cart command
Cypress.Commands.add('addToCart', (productIndex = 0) => {
  cy.get('[data-testid="product-card"]').eq(productIndex).click();
  cy.get('[data-testid="add-to-cart"]').click();
});

// Login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Check toast notification
Cypress.Commands.add('checkToast', (message) => {
  cy.get('.Toastify__toast').should('contain', message);
});

// Wait for loading to complete
Cypress.Commands.add('waitForLoading', () => {
  cy.get('[data-testid="loading"]').should('not.exist');
});
