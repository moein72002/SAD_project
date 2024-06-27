import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setIsAuthenticated(true);
                setUserRole(decodedToken.role);
            } catch (error) {
                console.error('Invalid token');
            }
        }
    }, []);

    console.log(`isAuthenticated: ${isAuthenticated}`);
    console.log(`userRole: ${userRole}`);

    return { isAuthenticated, userRole };
};
