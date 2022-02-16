import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils';


const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        isLogin() ?
            <Component/>
        : <Navigate to="/login" />
    );
};

export default PrivateRoute;