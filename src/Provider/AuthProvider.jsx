import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config.js";
import axios from "axios";

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
  setLoading(true)
  return signOut(auth) 
}

// Listen for authentication state changes
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    const userEmail = currentUser?.email || user?.email;
    const loggedInUser = {email: userEmail}
    setUser(currentUser);
    setLoading(false);
    // If user exists, issue a refresh token
    if(currentUser){
      axios.post(`https://car-dr-server.vercel.app/jwt`,loggedInUser, { withCredentials:true} )
      .then(res => {
        console.log("client token response", res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
    else{
      axios.post('https://car-dr-server.vercel.app/logout', loggedInUser, {withCredentials: true})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
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

