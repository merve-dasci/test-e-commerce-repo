import { 
  SET_CART, 
  SET_PAYMENT, 
  SET_ADDRESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART
} from '../actionTypes';
import { saveToPreviouslyAdded } from '../../utils/previouslyAdded';

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

export const addToCart = (product) => {
  // Ürünü önceden eklenenlere kaydet
  saveToPreviouslyAdded(product);
  
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const updateCartItem = (productId, count) => ({
  type: UPDATE_CART_ITEM,
  payload: { productId, count }
});

export const toggleCartItem = (productId) => ({
  type: TOGGLE_CART_ITEM,
  payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address
});