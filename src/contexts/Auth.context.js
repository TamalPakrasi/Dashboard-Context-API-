import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext({
  isAuthenticate: false,
});

export const AuthContextProvider = AuthContext.Provider;

export default function useAuth() {
  return useContext(AuthContext);
}
