import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialState } from "./AuthReducer";

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    return new Promise((resolve) => {
      dispatch({ type: "LOGIN_START" });

      // simulate API call
      setTimeout(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: userData,
        });
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
