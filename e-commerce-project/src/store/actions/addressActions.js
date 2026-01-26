import api from '../../api/api';
import {
  SET_ADDRESS_LIST,
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  SET_ADDRESS_LOADING
} from '../actionTypes';

// Action Creators
export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList
});

export const addAddressToList = (address) => ({
  type: ADD_ADDRESS,
  payload: address
});

export const updateAddressInList = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address
});

export const deleteAddressFromList = (addressId) => ({
  type: DELETE_ADDRESS,
  payload: addressId
});

export const setAddressLoading = (isLoading) => ({
  type: SET_ADDRESS_LOADING,
  payload: isLoading
});

// Thunk Actions

// GET - Kullanıcının adres listesini getir
export const fetchAddresses = () => {
  return async (dispatch) => {
    dispatch(setAddressLoading(true));
    try {
      const response = await api.get('/user/address');
      dispatch(setAddressList(response.data));
      return response.data;
    } catch (error) {
      console.error('Error fetching addresses:', error);
      throw error;
    } finally {
      dispatch(setAddressLoading(false));
    }
  };
};

// POST - Yeni adres ekle
export const addAddress = (addressData) => {
  return async (dispatch) => {
    dispatch(setAddressLoading(true));
    try {
      const response = await api.post('/user/address', addressData);
      dispatch(addAddressToList(response.data));
      return response.data;
    } catch (error) {
      console.error('Error adding address:', error);
      throw error;
    } finally {
      dispatch(setAddressLoading(false));
    }
  };
};

// PUT - Adresi güncelle
export const updateAddress = (addressData) => {
  return async (dispatch) => {
    dispatch(setAddressLoading(true));
    try {
      const response = await api.put('/user/address', addressData);
      dispatch(updateAddressInList(response.data));
      return response.data;
    } catch (error) {
      console.error('Error updating address:', error);
      throw error;
    } finally {
      dispatch(setAddressLoading(false));
    }
  };
};

// DELETE - Adresi sil
export const deleteAddress = (addressId) => {
  return async (dispatch) => {
    dispatch(setAddressLoading(true));
    try {
      await api.delete(`/user/address/${addressId}`);
      dispatch(deleteAddressFromList(addressId));
      return addressId;
    } catch (error) {
      console.error('Error deleting address:', error);
      throw error;
    } finally {
      dispatch(setAddressLoading(false));
    }
  };
};
