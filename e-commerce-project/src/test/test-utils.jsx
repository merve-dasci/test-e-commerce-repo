import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from '../context/ThemeContext';

// Default mock state
const defaultState = {
  client: {
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
    cardLoading: false,
  },
  product: {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    fetchState: 'NOT_FETCHED',
    currentProduct: null,
  },
  shoppingCart: {
    cart: [],
    favorites: [],
    payment: {},
    address: {},
  },
};

// Create a mock store
export const createMockStore = (preloadedState = {}) => {
  const mergedState = {
    client: { ...defaultState.client, ...preloadedState.client },
    product: { ...defaultState.product, ...preloadedState.product },
    shoppingCart: { ...defaultState.shoppingCart, ...preloadedState.shoppingCart },
  };

  return configureStore({
    reducer: {
      client: (state = mergedState.client) => state,
      product: (state = mergedState.product) => state,
      shoppingCart: (state = mergedState.shoppingCart) => state,
    },
    preloadedState: mergedState,
  });
};

// Custom render function with all providers
export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = createMockStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

// Re-export everything from RTL
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
