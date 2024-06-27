import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import {
    Button,
    TextField,
    Typography,
    Container,
    Box,
    Alert,
} from '@mui/material';

const LoginForm = ({ role }) => {
    const [formState, setFormState] = useState({ email: '', password: '', role: role });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formState);
            console.log('Login successful:', response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', response.data.accessToken);

            const decodedToken = jwtDecode(response.data.accessToken);

            // Redirect user based on role
            switch (decodedToken.role) {
                case 'admin':
                    navigate('/admin');
                    break;
                case 'doctor':
                    navigate('/doctor');
                    break;
                case 'system_secretary':
                    navigate('/system-secretary');
                    break;
                case 'radiology_center_employee':
                    navigate('/radiology-center-employee');
                    break;
                case 'charity_employee':
                    navigate('/charity-employee');
                    break;
                default:
                    navigate('/');
                    break;
            }
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data.message : error.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formState.password}
                    onChange={handleInputChange}
                    required
                    margin="normal"
                />
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default LoginForm;
