import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
  }
  function logout() {
    setAuthToken(null);
  }

  const ctx = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
