import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const {pathname} = useLocation()
    console.log(pathname);
    if(loading){
       return <div className='text-center mt-80'><progress className="progress w-56"></progress></div>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={ pathname } to={'/login'} replace></Navigate>
};

export default PrivateRoute;