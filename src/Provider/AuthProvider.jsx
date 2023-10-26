import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config.js";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // Loading state
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

//   Register 
const createUser = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
     
}
// Login 
const login = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}
// Logout
const logout = () => {
  return signOut(auth) 
}

// Listen for authentication state changes
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
//  console.log(user);
  // Unsubscribe when the component unmounts
  return () => unsubscribe();
}, [user]);


  const authInfo = {
    loading,
    user,
    createUser,
    login,
    logout
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

