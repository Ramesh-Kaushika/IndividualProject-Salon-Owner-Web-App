import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';
import {Button} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const FeedBack = () => {
    // Sample data for the table
    const [clients, setClients] = useState([
        { id: 1, date: '2024.10.10', comment: 'Well done', rating: '3.0',},
        { id: 2, date: '2024.10.11', comment: 'Nice!', rating: '4.0',},
        { id: 3, date: '2024.10.12', comment: 'Excellent Staff', rating: '5.0',},
    ]);

    // Function to handle deleting a client
    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography level="body-sm" sx={{ textAlign: 'center', pb: 2, fontWeight:'700', fontSize:40, }}>
                Feedback
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
                    <tr style={{ backgroundColor: '#212121' }}>
                        <th style={{ color: '#ffffff',width: 200 }}>Date</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Comment</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Rating</th>
                        <th style={{ color: '#ffffff',width: 100, textAlign:'center'}}>Edite</th>

                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.date}</td>
                            <td>{client.comment}</td>
                            <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <StarIcon sx={{color:'#dea711'}}/>
                                {client.rating}</td>
                            <td >
                                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
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

export default FeedBack;
