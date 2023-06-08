import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "carlos" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
