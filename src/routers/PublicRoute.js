import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        isLogin() && restricted ?
            <Navigate to="/dashboard" />
        :  <Component/>
    );
};

export default PublicRoute;