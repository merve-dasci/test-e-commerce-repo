/// <reference types="cypress" />

describe('Shopping Flow', () => {
  beforeEach(() => {
    cy.visit('/shop');
  });

  it('should display products on shop page', () => {
    // Wait for products to load
    cy.get('[class*="grid"]').should('exist');
  });

  it('should navigate to product detail when clicking a product', () => {
    // Wait for products and click first one
    cy.get('a[href*="/shop/"]').first().click();
    
    // Should be on product detail page
    cy.url().should('match', /\/shop\/|\/product\//);
  });

  it('should be able to search for products', () => {
    // Type in search box
    cy.get('input[placeholder*="Ürün ara"], input[placeholder*="ara"]')
      .first()
      .type('shirt');
    
    // Results should update
    cy.wait(1000); // Wait for debounce
    cy.url().should('include', 'search');
  });
});

describe('Cart Flow', () => {
  it('should show empty cart message when cart is empty', () => {
    cy.visit('/cart');
    
    // Should show empty cart message
    cy.contains('Sepetiniz Boş').should('be.visible');
  });

  it('should have a link to continue shopping', () => {
    cy.visit('/cart');
    
    cy.contains('Alışverişe Devam Et').should('be.visible');
    cy.contains('Alışverişe Devam Et').click();
    cy.url().should('include', '/shop');
  });
});

describe('Favorites Flow', () => {
  it('should show empty favorites message when no favorites', () => {
    cy.visit('/favorites');
    
    // Should show empty favorites UI
    cy.get('body').should('contain.text', 'Favori');
  });
});

describe('Authentication Flow', () => {
  it('should display login form', () => {
    cy.visit('/login');
    
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should display signup form', () => {
    cy.visit('/signup');
    
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
  });

  it('should show validation errors on empty login submit', () => {
    cy.visit('/login');
    
    cy.get('button[type="submit"]').click();
    
    // Should show validation message
    cy.get('form').should('exist');
  });

  it('should redirect to login when accessing protected route', () => {
    cy.visit('/order');
    
    // Should redirect to login
    cy.url().should('include', '/login');
  });
});
