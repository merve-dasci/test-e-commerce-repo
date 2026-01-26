import api from '../../api/api';
import { 
  SET_CATEGORIES, 
  SET_PRODUCT_LIST, 
  SET_TOTAL, 
  SET_FETCH_STATE, 
  SET_LIMIT, 
  SET_OFFSET, 
  SET_FILTER,
  SET_PRODUCT 
} from '../actionTypes';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

export const setProduct = (product) => ({
  type: SET_PRODUCT,
  payload: product
});


export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    
    return api.get('/categories')
      .then(response => {
        const categories = Array.isArray(response.data) ? response.data : [];
        dispatch(setCategories(categories));
        dispatch(setFetchState('FETCHED'));
        return categories;
      })
      .catch(error => {
        dispatch(setFetchState('FAILED'));
        console.error('Error fetching categories:', error);
        throw error;
      });
  };
};


export const fetchProducts = (params = {}) => {
  return (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    
    // Build query string from params (categoryId, filter, sort, limit, offset)
    const queryParams = new URLSearchParams();
    if (params.categoryId) queryParams.append('category', params.categoryId);
    if (params.filter) queryParams.append('filter', params.filter);
    if (params.sort) queryParams.append('sort', params.sort);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.offset) queryParams.append('offset', params.offset);
    
    const queryString = queryParams.toString();
    const url = queryString ? `/products?${queryString}` : '/products';
    
    return api.get(url)
      .then(response => {
        const { total, products } = response.data;
        
        dispatch(setTotal(total));
        dispatch(setProductList(products));
        dispatch(setFetchState('FETCHED'));
        return response.data;
      })
      .catch(error => {
        dispatch(setFetchState('FAILED'));
        console.error('Error fetching products:', error);
        throw error;
      });
  };
};


export const fetchProduct = (productId) => {
  return (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    dispatch(setProduct(null)); 
    
    return api.get(`/products/${productId}`)
      .then(response => {
        dispatch(setProduct(response.data));
        dispatch(setFetchState('FETCHED'));
        return response.data;
      })
      .catch(error => {
        dispatch(setFetchState('FAILED'));
        console.error('Error fetching product:', error);
        throw error;
      });
  };
};