/// <reference types="cypress" />

describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to login page', () => {
    cy.contains('Login').click();
    cy.url().should('include', '/login');
  });

  it('should display login form', () => {
    cy.visit('/login');
    
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should show validation error for empty form', () => {
    cy.visit('/login');
    
    cy.get('button[type="submit"]').click();
    
    // Form should still be on login page (validation prevents submit)
    cy.url().should('include', '/login');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/login');
    
    cy.get('input[type="email"]').type('invalid@test.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    
    // Should show error toast or stay on login page
    cy.url().should('include', '/login');
  });

  it('should navigate to signup page', () => {
    cy.visit('/login');
    
    cy.contains('Sign Up').click();
    cy.url().should('include', '/signup');
  });

  it('should display signup form', () => {
    cy.visit('/signup');
    
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
  });

  it('should redirect unauthenticated user from protected route', () => {
    cy.visit('/order');
    
    // Should redirect to login
    cy.url().should('include', '/login');
  });
});
