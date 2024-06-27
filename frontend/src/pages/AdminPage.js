import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Grid, Paper, AppBar, Toolbar } from '@mui/material';

const AdminPage = () => (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Admin Page
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Add Entities
                    </Typography>
                    <List>
                        <ListItem
                            component={Link}
                            to="/add/charity"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="Add Charity" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/add/charity-employee"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="Add Charity Employee" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/add/radiology-center"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="Add Radiology Center" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/add/radiology-center-employee"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="Add Radiology Center Employee" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/add/system-secretary"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="Add System Secretary" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/add/doctor"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="Add Doctor" />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3, bgcolor: '#e0f7fa' }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        View Lists
                    </Typography>
                    <List>
                        <ListItem
                            component={Link}
                            to="/list/charities"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="View Charities" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/list/charity-employees"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="View Charity Employees" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/list/radiology-centers"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="View Radiology Centers" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/list/radiology-center-employees"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="View Radiology Center Employees" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/list/system-secretaries"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="View System Secretaries" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/list/doctors"
                            button
                            sx={{ bgcolor: '#e0e0e0', mb: 1, '&:hover': { bgcolor: '#d3d3d3' } }}
                        >
                            <ListItemText primary="View Doctors" />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    </Container>
);

export default AdminPage;
