import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Paper,
    Typography,
    AppBar,
    Toolbar
} from '@mui/material';
import List from '../components/List';

const ListPage = () => {
    const { entity } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch the list of items based on the entity type
        const fetchItems = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:5000/api/${entity}/list`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(`response.data: ${response.data}`);
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [entity]);

    return (
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {entity.charAt(0).toUpperCase() + entity.slice(1)} List
                    </Typography>
                </Toolbar>
            </AppBar>
            <List items={items} />
        </Paper>
    );
};

export default ListPage;
