import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ roles }) => {
    // const { isAuthenticated, userRole } = useAuth();
    var isAuthenticated = false;
    var userRole = '';
    
    console.log('token:');
    const token = localStorage.getItem('token');
    if (token) {
        try {
            console.log(`token: ${token}`);
            const decodedToken = jwtDecode(token);
            isAuthenticated = true;
            userRole = decodedToken.role
        } catch (error) {
            console.error('Invalid token');
        }
    }

    // console.log(`isAuthenticated: ${isAuthenticated}`);
    // console.log(`userRole: ${userRole}`);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (roles && !roles.includes(userRole)) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
