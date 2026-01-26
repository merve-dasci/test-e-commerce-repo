import { describe, it, expect } from 'vitest';
import shoppingCartReducer from '../shoppingCartReducer';
import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  UPDATE_CART_ITEM, 
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from '../../actionTypes';

describe('Shopping Cart Reducer', () => {
  const initialState = {
    cart: [],
    favorites: [],
    payment: {},
    address: {},
  };

  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 99.99,
    images: [{ url: '/test.jpg' }],
  };

  describe('ADD_TO_CART', () => {
    it('adds a new product to empty cart', () => {
      const action = { type: ADD_TO_CART, payload: mockProduct };
      const newState = shoppingCartReducer(initialState, action);

      expect(newState.cart).toHaveLength(1);
      expect(newState.cart[0].product.id).toBe(1);
      expect(newState.cart[0].count).toBe(1);
      expect(newState.cart[0].checked).toBe(true);
    });

    it('increments count when adding existing product', () => {
      const stateWithProduct = {
        ...initialState,
        cart: [{ product: mockProduct, count: 1, checked: true }],
      };

      const action = { type: ADD_TO_CART, payload: mockProduct };
      const newState = shoppingCartReducer(stateWithProduct, action);

      expect(newState.cart).toHaveLength(1);
      expect(newState.cart[0].count).toBe(2);
    });
  });

  describe('REMOVE_FROM_CART', () => {
    it('removes product from cart', () => {
      const stateWithProduct = {
        ...initialState,
        cart: [{ product: mockProduct, count: 2, checked: true }],
      };

      const action = { type: REMOVE_FROM_CART, payload: 1 };
      const newState = shoppingCartReducer(stateWithProduct, action);

      expect(newState.cart).toHaveLength(0);
    });

    it('does not affect other products', () => {
      const anotherProduct = { ...mockProduct, id: 2, name: 'Another Product' };
      const stateWithProducts = {
        ...initialState,
        cart: [
          { product: mockProduct, count: 1, checked: true },
          { product: anotherProduct, count: 1, checked: true },
        ],
      };

      const action = { type: REMOVE_FROM_CART, payload: 1 };
      const newState = shoppingCartReducer(stateWithProducts, action);

      expect(newState.cart).toHaveLength(1);
      expect(newState.cart[0].product.id).toBe(2);
    });
  });

  describe('UPDATE_CART_ITEM', () => {
    it('updates product count', () => {
      const stateWithProduct = {
        ...initialState,
        cart: [{ product: mockProduct, count: 1, checked: true }],
      };

      const action = { 
        type: UPDATE_CART_ITEM, 
        payload: { productId: 1, count: 5 } 
      };
      const newState = shoppingCartReducer(stateWithProduct, action);

      expect(newState.cart[0].count).toBe(5);
    });
  });

  describe('TOGGLE_CART_ITEM', () => {
    it('toggles checked state from true to false', () => {
      const stateWithProduct = {
        ...initialState,
        cart: [{ product: mockProduct, count: 1, checked: true }],
      };

      const action = { type: TOGGLE_CART_ITEM, payload: 1 };
      const newState = shoppingCartReducer(stateWithProduct, action);

      expect(newState.cart[0].checked).toBe(false);
    });

    it('toggles checked state from false to true', () => {
      const stateWithProduct = {
        ...initialState,
        cart: [{ product: mockProduct, count: 1, checked: false }],
      };

      const action = { type: TOGGLE_CART_ITEM, payload: 1 };
      const newState = shoppingCartReducer(stateWithProduct, action);

      expect(newState.cart[0].checked).toBe(true);
    });
  });

  describe('CLEAR_CART', () => {
    it('clears all items from cart', () => {
      const stateWithProducts = {
        ...initialState,
        cart: [
          { product: mockProduct, count: 2, checked: true },
          { product: { ...mockProduct, id: 2 }, count: 1, checked: true },
        ],
      };

      const action = { type: CLEAR_CART };
      const newState = shoppingCartReducer(stateWithProducts, action);

      expect(newState.cart).toHaveLength(0);
    });
  });

  describe('Favorites', () => {
    it('adds product to favorites', () => {
      const action = { type: ADD_TO_FAVORITES, payload: mockProduct };
      const newState = shoppingCartReducer(initialState, action);

      expect(newState.favorites).toHaveLength(1);
      expect(newState.favorites[0].id).toBe(1);
    });

    it('removes product from favorites', () => {
      const stateWithFavorite = {
        ...initialState,
        favorites: [mockProduct],
      };

      const action = { type: REMOVE_FROM_FAVORITES, payload: 1 };
      const newState = shoppingCartReducer(stateWithFavorite, action);

      expect(newState.favorites).toHaveLength(0);
    });
  });

  describe('Unknown action', () => {
    it('returns current state for unknown action', () => {
      const action = { type: 'UNKNOWN_ACTION' };
      const newState = shoppingCartReducer(initialState, action);

      expect(newState).toEqual(initialState);
    });
  });
});
