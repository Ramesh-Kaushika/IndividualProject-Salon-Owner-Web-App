import React, {useEffect, useState} from 'react';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';
import {Button} from "@mui/material";
import instance from "../../services/Axios/AxiosOrder.jsx";
import {useQuery} from "react-query";

const ClientBase = () => {
// Sample data for the table
    // Use `useQuery` with polling to auto-update data
    const { data: clients, isLoading, error } = useQuery(
        'fetchClients', // unique query key
        () => instance.get('/api/v1/customer').then((res) => res.data),
        {
            refetchInterval: 1000, // Fetch data every 5 seconds
        }
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading clients: {error.message}</div>;


    // Function to handle deleting a client910111123
    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    return (
        <Box sx={{width: '100%'}}>
            <Typography level="body-sm" sx={{textAlign: 'center', pb: 2, fontWeight: '700', fontSize: 40,}}>
                Client Base
            </Typography>
            <Sheet
                variant="outlined"
                sx={(theme) => ({
                    '--TableCell-height': '40px',
                    // the number is the amount of the header rows.
                    '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
                    '--Table-firstColumnWidth': '80px',
                    '--Table-lastColumnWidth': '144px',
                    // background needs to have transparency to show the scrolling shadows
                    '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
                    '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
                    overflow: 'auto',
                    background: `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
                    backgroundSize:
                        '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'local, local, scroll, scroll',
                    backgroundPosition:
                        'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',

                })}
            >
                <Table
                    borderAxis="bothBetween"
                    stripe="odd"
                    hoverRow
                >
                    <thead>
                    <tr style={{backgroundColor: '#212121'}}>
                        <th style={{color: '#ffffff', width: 200}}>Name</th>
                        <th style={{color: '#ffffff', width: 200}}>Gender</th>
                        <th style={{color: '#ffffff', width: 200}}>Email</th>
                        <th style={{color: '#ffffff', width: 200}}>Phone</th>
                        <th style={{color: '#ffffff', width: 100}}>Edite</th>

                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.customerId}>
                            <td>{client.customerName}</td>
                            <td>{client.gender}</td>
                            <td>{client.email}</td>
                            <td>{client.phoneNumber}</td>
                            <td>
                                <Box sx={{display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => setClients(clients.filter((c) => c.id !== client.id))}
                                    >
                                        Delete
                                    </Button>

                                </Box>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Sheet>
        </Box>


    );
};

export default ClientBase;
