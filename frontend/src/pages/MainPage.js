// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, List, ListItem } from '@mui/material';

const MainPage = () => (
    <Container>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Main Page
                </Typography>
            </Toolbar>
        </AppBar>
        <List component="nav">
            <ListItem>
                <Button component={Link} to="/login/admin" variant="contained" color="primary" fullWidth>
                    Admin Login
                </Button>
            </ListItem>
            <ListItem>
                <Button component={Link} to="/login/charity-employee" variant="contained" color="primary" fullWidth>
                    Charity Employee Login
                </Button>
            </ListItem>
            <ListItem>
                <Button component={Link} to="/login/radiology-center" variant="contained" color="primary" fullWidth>
                    Radiology Center Login
                </Button>
            </ListItem>
            <ListItem>
                <Button component={Link} to="/login/system-secretary" variant="contained" color="primary" fullWidth>
                    System Secretary Login
                </Button>
            </ListItem>
            <ListItem>
                <Button component={Link} to="/login/doctor" variant="contained" color="primary" fullWidth>
                    Doctor Login
                </Button>
            </ListItem>
        </List>
    </Container>
);

export default MainPage;
