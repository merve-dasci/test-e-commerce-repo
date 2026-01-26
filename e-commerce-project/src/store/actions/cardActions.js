import api from '../../api/api';
import {
  SET_CREDIT_CARDS,
  ADD_CREDIT_CARD,
  UPDATE_CREDIT_CARD,
  DELETE_CREDIT_CARD,
  SET_CARD_LOADING
} from '../actionTypes';

// Action Creators
export const setCreditCards = (cards) => ({
  type: SET_CREDIT_CARDS,
  payload: cards
});

export const addCreditCardToList = (card) => ({
  type: ADD_CREDIT_CARD,
  payload: card
});

export const updateCreditCardInList = (card) => ({
  type: UPDATE_CREDIT_CARD,
  payload: card
});

export const deleteCreditCardFromList = (cardId) => ({
  type: DELETE_CREDIT_CARD,
  payload: cardId
});

export const setCardLoading = (isLoading) => ({
  type: SET_CARD_LOADING,
  payload: isLoading
});

// Thunk Actions

// GET - Kullanıcının kart listesini getir
export const fetchCards = () => {
  return async (dispatch) => {
    dispatch(setCardLoading(true));
    try {
      const response = await api.get('/user/card');
      dispatch(setCreditCards(response.data));
      return response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    } finally {
      dispatch(setCardLoading(false));
    }
  };
};

// POST - Yeni kart ekle
export const addCard = (cardData) => {
  return async (dispatch) => {
    dispatch(setCardLoading(true));
    try {
      const response = await api.post('/user/card', cardData);
      dispatch(addCreditCardToList(response.data));
      return response.data;
    } catch (error) {
      console.error('Error adding card:', error);
      throw error;
    } finally {
      dispatch(setCardLoading(false));
    }
  };
};

// PUT - Kartı güncelle
export const updateCard = (cardData) => {
  return async (dispatch) => {
    dispatch(setCardLoading(true));
    try {
      const response = await api.put('/user/card', cardData);
      dispatch(updateCreditCardInList(response.data));
      return response.data;
    } catch (error) {
      console.error('Error updating card:', error);
      throw error;
    } finally {
      dispatch(setCardLoading(false));
    }
  };
};

// DELETE - Kartı sil
export const deleteCard = (cardId) => {
  return async (dispatch) => {
    dispatch(setCardLoading(true));
    try {
      await api.delete(`/user/card/${cardId}`);
      dispatch(deleteCreditCardFromList(cardId));
      return cardId;
    } catch (error) {
      console.error('Error deleting card:', error);
      throw error;
    } finally {
      dispatch(setCardLoading(false));
    }
  };
};
