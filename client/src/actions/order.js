import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_ORDER,
  GET_ORDERS,
  ORDER_ERROR,
  UPDATE_ORDER,
  CLEAR_ORDER,
  ACCOUNT_DELETED
} from './types';

// Get current users oreder
export const getCurrentOrder = () => async dispatch => {
  try {
    const res = await axios.get('/api/order/user');

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all oreders
export const getOrders = () => async dispatch => {
  dispatch({ type: CLEAR_ORDER });

  try {
    const res = await axios.get('/api/order/all');

    dispatch({
      type: GET_ORDERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get oreder by ID
export const getOrderById = orderID => async dispatch => {
  try {
    const res = await axios.get(`/api/order/user/${orderID}`);

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create Client Order
export const createOrder = (
  repairman_id,
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(
      `/api/oerder/repairman/${repairman_id}`,
      formData,
      config
    );

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'order Updated' : 'order Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Upadate Client Order
export const UpdateOrder = (
  repairman_id,
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(
      `/api/oerder/repairman/${repairman_id}`,
      formData,
      config
    );

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Order Updated' : 'Order Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Confirm Order
export const ConfirmOrder = (
  user_id,
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(
      `/api/oerder/user/${user_id}`,
      formData,
      config
    );

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Order Confirmed' : 'Order Confirmed', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Delete account & profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('/api/order');

      dispatch({ type: CLEAR_ORDER });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Your account has been permanantly deleted'));
    } catch (err) {
      dispatch({
        type: ORDER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
