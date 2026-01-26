import { 
  SET_CART, 
  SET_PAYMENT, 
  SET_ADDRESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  SET_FAVORITES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from '../actionTypes';

const initialState = {
  cart: [],  // [{count: 1, checked: true, product: {...}}, ...]
  favorites: [], // [product, product, ...]
  payment: {},
  address: {}
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload
      };
    
    case ADD_TO_CART: {
      const existingItem = state.cart.find(
        item => item.product.id === action.payload.id
      );
      
      if (existingItem) {
        
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          )
        };
      } else {
       
        return {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, product: action.payload }]
        };
      }
    }
    
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };
    
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.count }
            : item
        )
      };
    
    case TOGGLE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };
    
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload
      };
    
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    
    // Favorites cases
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload)
      };
    
    default:
      return state;
  }
};

export default shoppingCartReducer;