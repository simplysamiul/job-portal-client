import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContrext/AuthContrext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../pages/custome/Loader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader />
    }

    if(user && user.email){
        return children;
    }

    return <Navigate to="/login" state={location.pathname} />
};

export default PrivateRoute;