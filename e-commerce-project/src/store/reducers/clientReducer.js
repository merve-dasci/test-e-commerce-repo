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
  VERIFY_TOKEN_FAILURE
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
  loginError: null
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
    
    default:
      return state;
  }
};

export default clientReducer;