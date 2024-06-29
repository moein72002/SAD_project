import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box
} from '@mui/material';

const List = ({ items }) => {
    // Filter out keys that contain "password"
    const filteredKeys = items.length > 0
        ? Object.keys(items[0]).filter(key => !key.toLowerCase().includes('password'))
        : [];

    return (
        <Box sx={{ maxHeight: '400px', overflow: 'auto' }}>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {filteredKeys.map((key) => (
                                <TableCell
                                    key={key}
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        backgroundColor: 'background.paper',
                                        zIndex: 1
                                    }}
                                >
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            // assuming 'id' is a unique identifier for each item
                            <TableRow key={item.id}>
                                {filteredKeys.map((key) => (
                                    <TableCell key={key}>
                                        {typeof item[key] === 'boolean' ? item[key].toString() : item[key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default List;
