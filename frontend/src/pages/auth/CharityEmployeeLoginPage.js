import React from 'react';
import LoginForm from '../../components/LoginForm';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

const CharityEmployeeLoginPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Charity Employee Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <LoginForm role="charity_employee" />
        </div>
    );
};

export default CharityEmployeeLoginPage;

