//

// import React, { createContext, useState, useContext, useEffect } from 'react';

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // User state
//   const [token, setToken] = useState(localStorage.getItem('authToken') || null);

//   // Save token to localStorage when it changes
//   useEffect(() => {
//     if (token) {
//       localStorage.setItem('authToken', token);
//     } else {
//       localStorage.removeItem('authToken');
//     }
//   }, [token]);

//   const login = (userData, token) => {
//     setUser(userData);
//     setToken(token);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//   };

//   return (
//     <UserContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import React, { createContext, useState,useContext } from 'react';

export const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("username") || null); // Holds user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};