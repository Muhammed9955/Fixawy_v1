import {
  GET_ORDER,
  GET_ORDERS,
  ORDER_ERROR,
  CLEAR_ORDER,
  UPDATE_ORDER
} from '../actions/types';

const initialState = {
  order: null,
  orders: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDER:
    case UPDATE_ORDER:
      return {
        ...state,
        order: payload,
        loading: false
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
        loading: false
      };
    case ORDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_ORDER:
      return {
        ...state,
        order: null,
        loading: false
      };
    default:
      return state;
  }
}
