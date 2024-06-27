import React from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, Box } from '@mui/material';
import Form from '../components/Form';

const formConfigs = {
    "charity": {
        title: 'Charity',
        apiEndpoint: '/charities/add',
        fields: [
            { label: 'Name', name: 'name', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Address', name: 'address', type: 'text', required: true },
        ],
    },
    "charity-employee": {
        title: 'Charity Employee',
        apiEndpoint: '/charity-employees/add',
        fields: [
            { label: 'Charity ID', name: 'charity_id', type: 'text', required: true },
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Email', name: 'email', type: 'email', required: true },
            { label: 'Password', name: 'password', type: 'password', required: true },
        ],
    },
    "radiology-center": {
        title: 'Radiology Center',
        apiEndpoint: '/radiology-centers/add',
        fields: [
            { label: 'Name', name: 'name', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Address', name: 'address', type: 'text', required: true },
        ],
    },
    "radiology-center-employee": {
        title: 'Radiology Center Employee',
        apiEndpoint: '/radiology-center-employees/add',
        fields: [
            { label: 'Radiology Center ID', name: 'radiology_center_id', type: 'text', required: true },
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Email', name: 'email', type: 'email', required: true },
            { label: 'Password', name: 'password', type: 'password', required: true },
        ],
    },
    "system-secretary": {
        title: 'System Secretary',
        apiEndpoint: '/system-secretaries/add',
        fields: [
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Email', name: 'email', type: 'email', required: true },
            { label: 'Password', name: 'password', type: 'password', required: true },
        ],
    },
    "doctor": {
        title: 'Doctor',
        apiEndpoint: '/doctors/add',
        fields: [
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Email', name: 'email', type: 'email', required: true },
            { label: 'Password', name: 'password', type: 'password', required: true },
        ],
    },
    "patient": {
        title: 'Patient',
        apiEndpoint: '/patients/add',
        fields: [
            { label: 'Charity ID', name: 'charity_id', type: 'text', required: true },
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'City', name: 'city', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Birthdate', name: 'birthdate', type: 'date', required: true },
        ],
    },
};

const AddPage = () => {
    const { entity } = useParams();
    const config = formConfigs[entity];

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Add {entity.charAt(0).toUpperCase() + entity.slice(1)}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box my={4}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                    {config ? (
                        <Form config={config} />
                    ) : (
                        <Typography variant="body1" color="error">
                            Invalid entity type
                        </Typography>
                    )}
                </Paper>
            </Box>
        </Container>
    );
};

export default AddPage;
