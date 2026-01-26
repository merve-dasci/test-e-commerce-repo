/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load homepage successfully', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should display header with logo', () => {
    cy.get('header').should('be.visible');
    cy.contains('Bandage').should('be.visible');
  });

  it('should display navigation links', () => {
    cy.contains('Home').should('be.visible');
    cy.contains('Shop').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Contact').should('be.visible');
  });

  it('should navigate to shop page', () => {
    cy.contains('Shop').click();
    cy.url().should('include', '/shop');
  });

  it('should display footer', () => {
    cy.get('footer').should('be.visible');
  });

  it('should toggle dark mode', () => {
    // Find theme toggle button
    cy.get('button[aria-label*="mode"]').first().click();
    cy.get('html').should('have.class', 'dark');
    
    // Toggle back to light mode
    cy.get('button[aria-label*="mode"]').first().click();
    cy.get('html').should('not.have.class', 'dark');
  });
});
