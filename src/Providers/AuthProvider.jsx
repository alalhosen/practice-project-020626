import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authinfo = { name: "nodi sagor khal bill" };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * 1. create context
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 *
 */
