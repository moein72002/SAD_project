import React, { useState } from 'react';
import api from '../services/api';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const Form = ({ config, onSubmitSuccess }) => {
    const [formData, setFormData] = useState(
        config.fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await api.post(config.apiEndpoint, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert(`${config.title} added successfully`);
            if (onSubmitSuccess) onSubmitSuccess();
        } catch (error) {
            console.error(error);
            alert(`Error adding ${config.title.toLowerCase()}`);
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                {config.title}
            </Typography>
            <form onSubmit={handleSubmit}>
                {config.fields.map((field) => (
                    <Box key={field.name} mb={2}>
                        <TextField
                            fullWidth
                            type={field.type === 'date' ? 'date' : field.type}
                            name={field.name}
                            label={field.label}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            variant="outlined"
                            InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                        />
                    </Box>
                ))}
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
