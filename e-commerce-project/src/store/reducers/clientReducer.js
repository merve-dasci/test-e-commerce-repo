import { 
  SET_USER, 
  SET_ROLES, 
  SET_THEME, 
  SET_LANGUAGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  VERIFY_TOKEN_START,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_FAILURE,
  SET_ADDRESS_LIST,
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  SET_ADDRESS_LOADING,
  SET_CREDIT_CARDS,
  ADD_CREDIT_CARD,
  UPDATE_CREDIT_CARD,
  DELETE_CREDIT_CARD,
  SET_CARD_LOADING
} from '../actionTypes';

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: '',
  isLoading: false,
  isLoggedIn: false,
  loginError: null,
  addressLoading: false,
  cardLoading: false
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload
      };
    
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        loginError: null
      };
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
        loginError: null
      };
    
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        loginError: action.payload
      };
    
    case LOGOUT:
      return {
        ...state,
        user: {},
        addressList: [],
        isLoading: false,
        isLoggedIn: false,
        loginError: null
      };
    
    case VERIFY_TOKEN_START:
      return {
        ...state,
        isLoading: true
      };
    
    case VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isLoggedIn: true,
        loginError: null
      };
    
    case VERIFY_TOKEN_FAILURE:
      return {
        ...state,
        user: {},
        isLoading: false,
        isLoggedIn: false,
        loginError: action.payload
      };

    // Address Actions
    case SET_ADDRESS_LIST:
      return {
        ...state,
        addressList: action.payload
      };

    case ADD_ADDRESS:
      return {
        ...state,
        addressList: [...state.addressList, action.payload]
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        addressList: state.addressList.map(addr => 
          addr.id === action.payload.id ? action.payload : addr
        )
      };

    case DELETE_ADDRESS:
      return {
        ...state,
        addressList: state.addressList.filter(addr => addr.id !== action.payload)
      };

    case SET_ADDRESS_LOADING:
      return {
        ...state,
        addressLoading: action.payload
      };

    // Credit Card Actions
    case SET_CREDIT_CARDS:
      return {
        ...state,
        creditCards: action.payload
      };

    case ADD_CREDIT_CARD:
      return {
        ...state,
        creditCards: [...state.creditCards, action.payload]
      };

    case UPDATE_CREDIT_CARD:
      return {
        ...state,
        creditCards: state.creditCards.map(card => 
          card.id === action.payload.id ? action.payload : card
        )
      };

    case DELETE_CREDIT_CARD:
      return {
        ...state,
        creditCards: state.creditCards.filter(card => card.id !== action.payload)
      };

    case SET_CARD_LOADING:
      return {
        ...state,
        cardLoading: action.payload
      };
    
    default:
      return state;
  }
};

export default clientReducer;