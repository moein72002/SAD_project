import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, ListItem, ListItemText, Box, Button } from '@mui/material';
import api from '../services/api';
import { jwtDecode } from 'jwt-decode';
import List from '../components/List';

const CharityEmployeePage = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        api.get('/patients/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => setPatients(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Charity Employee Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/add/patient"
                        sx={{ mb: 2 }}
                    >
                        Add Patient
                    </Button>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Patients
                    </Typography>
                    <List items={patients} />
                </Paper>
            </Container>
        </div>
    );
};

export default CharityEmployeePage;
