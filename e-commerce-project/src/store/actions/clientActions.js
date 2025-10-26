import axios from 'axios';
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
import { setAuthHeader, removeAuthHeader, removeAuthToken } from '../../utils/auth';


export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language
});

export const loginStart = () => ({
  type: LOGIN_START
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const logout = () => ({
  type: LOGOUT
});

export const verifyTokenStart = () => ({
  type: VERIFY_TOKEN_START
});

export const verifyTokenSuccess = (user, token) => ({
  type: VERIFY_TOKEN_SUCCESS,
  payload: { user, token }
});

export const verifyTokenFailure = (error) => ({
  type: VERIFY_TOKEN_FAILURE,
  payload: error
});


export const fetchRoles = () => {
  return (dispatch) => {
    return axios.get('https://workintech-fe-ecommerce.onrender.com/roles')
      .then(response => {
        dispatch(setRoles(response.data));
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
        throw error;
      });
  };
};

export const loginUser = (credentials, rememberMe = false) => {
  return (dispatch) => {
    dispatch(loginStart());
    
    return axios.post('https://workintech-fe-ecommerce.onrender.com/login', credentials)
      .then(response => {
        const { user, token } = response.data;
        
        
        setAuthHeader(token);
        
       
        if (rememberMe && token) {
          localStorage.setItem('token', token);
        }
        
       
        dispatch(loginSuccess(user));
        return { user, token };
      })
      .catch(error => {
        const errorMessage = error.response?.data?.message || 'Login failed';
        dispatch(loginFailure(errorMessage));
        throw new Error(errorMessage);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
   
    removeAuthToken();
    
   
    removeAuthHeader();
    
    
    dispatch(logout());
  };
};

export const verifyToken = (token) => {
  return (dispatch) => {
    dispatch(verifyTokenStart());
    
    
    setAuthHeader(token);
    
    return axios.get('https://workintech-fe-ecommerce.onrender.com/verify')
      .then(response => {
        const { user, token: newToken } = response.data;
        
       
        if (newToken) {
          localStorage.setItem('token', newToken);
          setAuthHeader(newToken);
        }
        
      
        dispatch(verifyTokenSuccess(user, newToken || token));
        return { user, token: newToken || token };
      })
      .catch(error => {
        console.error('Token verification failed:', error);
        
        
        removeAuthToken();
        removeAuthHeader();
        
        const errorMessage = error.response?.data?.message || 'Token verification failed';
        dispatch(verifyTokenFailure(errorMessage));
        throw new Error(errorMessage);
      });
  };
};