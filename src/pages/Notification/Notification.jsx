import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';



const Notification = () => {
    // Sample data for the table
    const [clients, setClients] = useState([
        { id: 1, date: '2024.10.10', message: 'Christmas Event', },
        { id: 2, date: '2025.04.10', message: 'Avurudu Season',  },
        { id: 3, date: '2024.11.11', message: 'Black Friday Night', },
    ]);

    // Function to handle deleting a client
    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
            }}>
                <Typography level="body-sm" sx={{margin:'0 auto', textAlign: 'center', pb: 2, fontWeight:'700', fontSize:40, }}>
                Notifications
                </Typography>
                <Button  onClick={()=> {}} variant="contained" sx={{
                    backgroundColor: 'red',
                    '&:hover': {
                        backgroundColor: '#009688', // Hover color
                    },
                    paddingY:1.2,
                    borderRadius:20,
                    color: 'white', width:'16%'}} endIcon={<SendIcon/>}>
                    Add Notifications
                </Button>
            </Box>
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
                    <tr style={{ backgroundColor: '#212121' }}>
                        <th style={{ color: '#ffffff',width: 200 }}>Date</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Message</th>
                        <th style={{ color: '#ffffff',width: 100 }}>Edite</th>

                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.date}</td>
                            <td>{client.message}</td>
                            <td>
                                <Box sx={{ display: 'flex', gap: 1 , justifyContent: 'center', alignItems: 'center'  }}>
                                    <Button
                                        size="sm"
                                        variant="soft"
                                        sx={{
                                            color: 'white',
                                            backgroundColor: 'darkred',
                                            '&:hover': {
                                                backgroundColor: 'red', // Hover color
                                            },
                                        }}
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

export default Notification;

