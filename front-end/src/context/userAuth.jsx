import { createContext, useState } from "react";

const userAuth = createContext();
function userAuthProvider({ children }) {
  [loggedIn, setLoggedIn] = useState(false);
  [userObject, setUserObject] = useState({});

  //Will be run to check if user has access to something and is logged in
  function authuser() {}

  //Clear the context
  function logout() {}

  //Use cookie to login upon app render
  function login() {}
}
