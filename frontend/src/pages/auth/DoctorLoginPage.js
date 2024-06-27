import React from 'react';
import LoginForm from '../../components/LoginForm';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

const DoctorLoginPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <LoginForm role="doctor" />
        </div>
    );
};

export default DoctorLoginPage;