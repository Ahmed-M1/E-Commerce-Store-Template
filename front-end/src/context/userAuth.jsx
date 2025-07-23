import { createContext, useState } from "react";

const userAuth = createContext();
function userAuthProvider({ children }) {
  [loggedIn, setLoggedIn] = useState(false);
  [userObject, setUserObject] = useState({});

  //Clear the context
  function logout() {}

  //Use cookie to login upon app render
  function login() {}

  return (
    <userAuth
      value={{
        logout,
        login,
        loggedIn,
        userObject,
      }}
    >
      {children}
    </userAuth>
  );
}
