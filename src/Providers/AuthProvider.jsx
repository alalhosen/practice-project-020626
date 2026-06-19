import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = () => {
  return (
   <AuthContext.Provider value={}>

   </AuthContext.Provider>
);
};

export default AuthProvider;

/**
 * 1. create context
 * 2. set provider with value
 * 
 */