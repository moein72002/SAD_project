import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

const List = ({ items }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    {items.length > 0 && Object.keys(items[0]).map((key) => (
                        <TableCell key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item) => (
                    <TableRow key={item.id}>
                        {Object.values(item).map((value, index) => (
                            <TableCell key={index}>{value}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default List;
