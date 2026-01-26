import { 
  SET_FAVORITES, 
  ADD_TO_FAVORITES, 
  REMOVE_FROM_FAVORITES 
} from '../actionTypes';

// LocalStorage key
const FAVORITES_KEY = 'favorites';

// LocalStorage'dan favorileri al
const getFavoritesFromStorage = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error reading favorites from localStorage:', error);
    return [];
  }
};

// LocalStorage'a favorileri kaydet
const saveFavoritesToStorage = (favorites) => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error);
  }
};

// Favorileri yükle (App başladığında çağrılır)
export const loadFavorites = () => (dispatch) => {
  const favorites = getFavoritesFromStorage();
  dispatch({
    type: SET_FAVORITES,
    payload: favorites
  });
};

// Favorilere ekle
export const addToFavorites = (product) => (dispatch, getState) => {
  const { favorites } = getState().shoppingCart;
  
  // Zaten favorilerde mi kontrol et
  const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);
  
  if (!isAlreadyFavorite) {
    const updatedFavorites = [...favorites, product];
    saveFavoritesToStorage(updatedFavorites);
    
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: product
    });
    
    return { success: true, message: 'Ürün favorilere eklendi!' };
  }
  
  return { success: false, message: 'Ürün zaten favorilerde!' };
};

// Favorilerden çıkar
export const removeFromFavorites = (productId) => (dispatch, getState) => {
  const { favorites } = getState().shoppingCart;
  
  const updatedFavorites = favorites.filter(fav => fav.id !== productId);
  saveFavoritesToStorage(updatedFavorites);
  
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: productId
  });
  
  return { success: true, message: 'Ürün favorilerden çıkarıldı!' };
};

// Favori toggle (ekle/çıkar)
export const toggleFavorite = (product) => (dispatch, getState) => {
  const { favorites } = getState().shoppingCart;
  
  const isFavorite = favorites.some(fav => fav.id === product.id);
  
  if (isFavorite) {
    return dispatch(removeFromFavorites(product.id));
  } else {
    return dispatch(addToFavorites(product));
  }
};

// Ürün favorilerde mi kontrol et
export const isFavorite = (productId) => (dispatch, getState) => {
  const { favorites } = getState().shoppingCart;
  return favorites.some(fav => fav.id === productId);
};
