import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({});
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;

export const UseUser = () => useContext(UserContext);
