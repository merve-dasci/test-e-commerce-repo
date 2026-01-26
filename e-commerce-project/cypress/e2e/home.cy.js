/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page successfully', () => {
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('should have working navigation links', () => {
    cy.contains('Shop').click();
    cy.url().should('include', '/shop');
  });

  it('should toggle dark mode', () => {
    // Find theme toggle button
    cy.get('button[aria-label="Dark mode"], button[aria-label="Light mode"]')
      .first()
      .click();
    
    // Check if dark class is applied to html
    cy.get('html').should('have.class', 'dark');
    
    // Toggle back
    cy.get('button[aria-label="Dark mode"], button[aria-label="Light mode"]')
      .first()
      .click();
    
    cy.get('html').should('not.have.class', 'dark');
  });
});
