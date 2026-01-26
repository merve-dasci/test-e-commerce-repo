import { describe, it, expect } from 'vitest';
import productReducer from '../productReducer';
import { 
  SET_CATEGORIES, 
  SET_PRODUCT_LIST, 
  SET_TOTAL, 
  SET_FETCH_STATE,
  SET_PRODUCT
} from '../../actionTypes';

describe('Product Reducer', () => {
  const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    fetchState: 'NOT_FETCHED',
    currentProduct: null,
  };

  describe('SET_CATEGORIES', () => {
    it('sets categories correctly', () => {
      const categories = [
        { id: 1, title: 'T-Shirt', gender: 'k' },
        { id: 2, title: 'Pants', gender: 'e' },
      ];

      const action = { type: SET_CATEGORIES, payload: categories };
      const newState = productReducer(initialState, action);

      expect(newState.categories).toHaveLength(2);
      expect(newState.categories[0].title).toBe('T-Shirt');
    });
  });

  describe('SET_PRODUCT_LIST', () => {
    it('sets product list correctly', () => {
      const products = [
        { id: 1, name: 'Product 1', price: 50 },
        { id: 2, name: 'Product 2', price: 75 },
      ];

      const action = { type: SET_PRODUCT_LIST, payload: products };
      const newState = productReducer(initialState, action);

      expect(newState.productList).toHaveLength(2);
      expect(newState.productList[0].name).toBe('Product 1');
    });
  });

  describe('SET_TOTAL', () => {
    it('sets total count correctly', () => {
      const action = { type: SET_TOTAL, payload: 150 };
      const newState = productReducer(initialState, action);

      expect(newState.total).toBe(150);
    });
  });

  describe('SET_FETCH_STATE', () => {
    it('sets fetch state to FETCHING', () => {
      const action = { type: SET_FETCH_STATE, payload: 'FETCHING' };
      const newState = productReducer(initialState, action);

      expect(newState.fetchState).toBe('FETCHING');
    });

    it('sets fetch state to FETCHED', () => {
      const action = { type: SET_FETCH_STATE, payload: 'FETCHED' };
      const newState = productReducer(initialState, action);

      expect(newState.fetchState).toBe('FETCHED');
    });

    it('sets fetch state to FAILED', () => {
      const action = { type: SET_FETCH_STATE, payload: 'FAILED' };
      const newState = productReducer(initialState, action);

      expect(newState.fetchState).toBe('FAILED');
    });
  });

  describe('SET_PRODUCT', () => {
    it('sets current product correctly', () => {
      const product = { id: 1, name: 'Single Product', price: 99.99 };

      const action = { type: SET_PRODUCT, payload: product };
      const newState = productReducer(initialState, action);

      expect(newState.currentProduct).toEqual(product);
      expect(newState.currentProduct.name).toBe('Single Product');
    });

    it('sets current product to null', () => {
      const stateWithProduct = {
        ...initialState,
        currentProduct: { id: 1, name: 'Old Product' },
      };

      const action = { type: SET_PRODUCT, payload: null };
      const newState = productReducer(stateWithProduct, action);

      expect(newState.currentProduct).toBeNull();
    });
  });

  describe('Unknown action', () => {
    it('returns current state for unknown action', () => {
      const action = { type: 'UNKNOWN_ACTION' };
      const newState = productReducer(initialState, action);

      expect(newState).toEqual(initialState);
    });
  });
});
