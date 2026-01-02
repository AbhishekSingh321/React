export const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}
