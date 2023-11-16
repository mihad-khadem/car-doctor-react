import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

//! Custom Hook

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;