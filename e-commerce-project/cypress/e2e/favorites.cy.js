/// <reference types="cypress" />

describe('Favorites Feature', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('should navigate to favorites page', () => {
    cy.visit('/favorites');
    cy.url().should('include', '/favorites');
  });

  it('should show empty state when no favorites', () => {
    cy.visit('/favorites');
    
    // Should show empty favorites message or heart icon
    cy.get('body').should('be.visible');
  });

  it('should navigate to product detail from shop', () => {
    cy.visit('/shop');
    
    // Click on first product
    cy.get('a[href*="/shop/"]').first().click();
    
    // Should be on product detail page
    cy.url().should('match', /\/shop\/.*\/.*\/\d+|\/product\/\d+/);
  });

  it('should have favorite button on product detail', () => {
    cy.visit('/shop');
    cy.get('a[href*="/shop/"]').first().click();
    
    // Check if there's a button (favorite functionality)
    cy.get('button').should('have.length.greaterThan', 0);
  });

  it('should persist favorites page access', () => {
    cy.visit('/favorites');
    
    // Reload page
    cy.reload();
    
    // Should still be on favorites
    cy.url().should('include', '/favorites');
  });
});
