import React from 'react';
import LoginForm from '../../components/LoginForm';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

const SystemSecretaryLoginPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        System Secretary Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <LoginForm role="system_secretary" />
        </div>
    );
};

export default SystemSecretaryLoginPage;

