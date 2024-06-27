import React from 'react';
import LoginForm from '../../components/LoginForm';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

const AdminLoginPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <LoginForm role="admin" />
        </div>
    );
};

export default AdminLoginPage;
