import { createContext, useContext, useState } from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // logout - remove token from local storage
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const isLoggedIn = !!token;
  //console.log("isloggedin", isLoggedIn);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        authorizationToken,
        BASE_URL,
        LogoutUser,
        name,
        setName,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
