import React from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, Box } from '@mui/material';
import Form from '../components/Form';

const formConfigs = {
    "admin": {
        title: 'Admin',
        apiEndpoint: '/admins/add',
        fields: [
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Email', name: 'email', type: 'email', required: true },
            { label: 'Password', name: 'password', type: 'password', required: true },
        ],
    },
    "charity": {
        title: 'Charity',
        apiEndpoint: '/charities/add',
        fields: [
            { label: 'Name', name: 'name', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Address', name: 'address', type: 'text', required: true },
            { label: 'Location ID', name: 'location_id', type: 'number', required: true },
        ],
    },
    "charity-employee": {
        title: 'Charity Employee',
        apiEndpoint: '/charity-employees/add',
        fields: [
            { label: 'Charity ID', name: 'charity_id', type: 'number', required: true },
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
            { label: 'Code', name: 'code', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Address', name: 'address', type: 'text', required: true },
            { label: 'Location ID', name: 'location_id', type: 'number', required: true },
        ],
    },
    "radiology-center-employee": {
        title: 'Radiology Center Employee',
        apiEndpoint: '/radiology-center-employees/add',
        fields: [
            { label: 'Radiology Center ID', name: 'radiology_center_id', type: 'number', required: true },
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
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
            { label: 'Doctor Code', name: 'doctor_code', type: 'text', required: true },
            { label: 'Major', name: 'major', type: 'text', required: true },
            { label: 'Phone Number', name: 'phone_number', type: 'text', required: true },
            { label: 'Email', name: 'email', type: 'email', required: true },
            { label: 'Password', name: 'password', type: 'password', required: true },
            { label: 'Address', name: 'address', type: 'text', required: true },
            { label: 'Location ID', name: 'location_id', type: 'number', required: true },
        ],
    },
    "patient": {
        title: 'Patient',
        apiEndpoint: '/patients/add',
        fields: [
            { label: 'Charity ID', name: 'charity_id', type: 'number', required: true },
            { label: 'First Name', name: 'first_name', type: 'text', required: true },
            { label: 'Last Name', name: 'last_name', type: 'text', required: true },
            { label: 'National ID', name: 'national_id', type: 'text', required: true },
            { label: 'Birthdate', name: 'birthdate', type: 'date', required: true },
            { label: 'Sex', name: 'sex', type: 'text', required: true },
        ],
    },
    "location": {
        title: 'Location',
        apiEndpoint: '/locations/add',
        fields: [
            { label: 'Sum of Population', name: 'sum_of_population', type: 'number', required: true },
            { label: 'Latitude', name: 'lat', type: 'number', required: true },
            { label: 'Longitude', name: 'lng', type: 'number', required: true },
            { label: 'City', name: 'city', type: 'text', required: true },
            { label: 'Country', name: 'country', type: 'text', required: true },
        ],
    },
    "doctor-free-time": {
        title: 'Doctor Free Time',
        apiEndpoint: '/doctor-free-times/add',
        fields: [
            { label: 'Doctor ID', name: 'doctor_id', type: 'number', required: true },
            { label: 'Date', name: 'date', type: 'date', required: true },
            { label: 'Start Time', name: 'start_time', type: 'time', required: true },
            { label: 'Finish Time', name: 'finish_time', type: 'time', required: true },
        ],
    },
    "doctor-visit": {
        title: 'Doctor Visit',
        apiEndpoint: '/doctor-visits/add',
        fields: [
            { label: 'Doctor Free Time ID', name: 'doctor_free_time_id', type: 'number', required: true },
            { label: 'Patient ID', name: 'patient_id', type: 'number', required: true },
            { label: 'Service ID', name: 'service_id', type: 'number', required: true },
            { label: 'Tooth Number', name: 'tooth_number', type: 'number', required: true },
            { label: 'Is Reminded', name: 'is_reminded', type: 'checkbox', required: true },
        ],
    },
    "drug": {
        title: 'Drug',
        apiEndpoint: '/drugs/add',
        fields: [
            { label: 'Drug ID', name: 'drug_id', type: 'number', required: true },
            { label: 'Drug Name', name: 'drug_name', type: 'text', required: true },
            { label: 'Salt', name: 'salt', type: 'text', required: false },
            { label: 'Dosage Form', name: 'dosage_form', type: 'text', required: true },
            { label: 'Strength', name: 'strength', type: 'text', required: false },
            { label: 'Route of Administration', name: 'route_of_admin', type: 'text', required: false },
            { label: 'ATC Code', name: 'atc_code', type: 'text', required: true },
            { label: 'Ingredient', name: 'ingredient', type: 'textarea', required: false },
            { label: 'Approved Clinical Indications', name: 'approved_clinical_indications', type: 'textarea', required: true },
            { label: 'Access Level', name: 'access_level', type: 'text', required: false },
            { label: 'Remarks', name: 'remarks', type: 'textarea', required: false },
            { label: 'Expiration Date', name: 'expiration_date', type: 'date', required: true },
        ],
    },
    "prescription": {
        title: 'Prescription',
        apiEndpoint: '/prescriptions/add',
        fields: [
            { label: 'Doctor Visit ID', name: 'doctor_visit_id', type: 'number', required: true },
            { label: 'Drug ID', name: 'drug_id', type: 'number', required: true },
            { label: 'Usage Instructions', name: 'usage_instructions', type: 'textarea', required: true },
        ],
    },
    "radiology-center-free-time": {
        title: 'Radiology Center Free Time',
        apiEndpoint: '/radiology-center-free-times/add',
        fields: [
            { label: 'Radiology Center ID', name: 'radiology_center_id', type: 'number', required: true },
            { label: 'Date', name: 'date', type: 'date', required: true },
            { label: 'Start Time', name: 'start_time', type: 'time', required: true },
            { label: 'Finish Time', name: 'finish_time', type: 'time', required: true },
        ],
    },
    "radiology-center-visit": {
        title: 'Radiology Center Visit',
        apiEndpoint: '/radiology-center-visits/add',
        fields: [
            { label: 'Radiology Center Free Time ID', name: 'radiology_center_free_time_id', type: 'number', required: true },
            { label: 'Patient ID', name: 'patient_id', type: 'number', required: true },
            { label: 'Service ID', name: 'service_id', type: 'number', required: true },
            { label: 'Is Reminded', name: 'is_reminded', type: 'checkbox', required: true },
        ],
    },
    "service": {
        title: 'Service',
        apiEndpoint: '/services/add',
        fields: [
            { label: 'Service ID', name: 'service_id', type: 'number', required: true },
            { label: 'Service Name', name: 'service_name', type: 'text', required: true },
            { label: 'Service Type', name: 'service_type', type: 'text', required: true },
            { label: 'Service Description', name: 'service_description', type: 'textarea', required: true },
            { label: 'Service Price', name: 'service_price', type: 'number', required: true },
            { label: 'Service Duration', name: 'service_duration', type: 'number', required: true },
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
