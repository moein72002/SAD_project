import React from 'react';
import LoginForm from '../../components/LoginForm';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

const RadiologyCenterEmployeeLoginPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Radiology Center Employee Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <LoginForm role="radiology_center_employee" />
        </div>
    );
};

export default RadiologyCenterEmployeeLoginPage;

