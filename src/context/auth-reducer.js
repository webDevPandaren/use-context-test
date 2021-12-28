import { SET_TOKEN, LOG_OUT, FETCH_CURRENT_USER } from './auth-actions';

const authReducer = (state, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        user: [...state.user, action.payload],
        isLoggedIn: true,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        user: [],
        isLoggedIn: false,
      };
    }
    case FETCH_CURRENT_USER: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
