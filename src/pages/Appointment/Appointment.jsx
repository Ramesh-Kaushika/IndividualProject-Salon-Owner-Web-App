import React, {useState} from 'react';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import Box from '@mui/joy/Box';
import {Button, TableCell, TableRow, TextField,Table} from "@mui/material";
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import CustomDialog from "../../components/CustomDialog/CustomDialog.jsx";

const Appointment = () => {

    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        gender: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        status: '',
        expert: '',
    });
    // Sample data for the table
    const [clients, setClients] = useState([
        {
            id: 1,
            name: 'Alice',
            gender: 'Female',
            email: 'alice@example.com',
            phone: '123-456-7890',
            date: '2024.10.10',
            time: '07.00AM',
            status: 'Hair Waxing',
            expert: 'Ramesh',
        },
        {
            id: 2,
            name: 'Bob',
            gender: 'Male',
            email: 'bob@example.com',
            phone: '234-567-8901',
            date: '2024.10.10',
            time: '17.00PM',
            status: 'Nail Polish',
            expert: 'Kaushika',
        },
        {
            id: 3,
            name: 'Charlie',
            gender: 'Male',
            email: 'charlie@example.com',
            phone: '345-678-9012',
            date: '2024.10.10',
            time: '10.00AM',
            status: 'Pedicure',
            expert: 'Nirushi',
        },
    ]);

    const handleClickOpen = () => {
        setFormValues({ name: '',
            gender: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            status: '',
            expert: '',});
        setOpen(true);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };
    const handleSave = () => {
        // Add new client
        const newClient = {...formValues, id: clients.length + 1};
        setClients([...clients, newClient]);

        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
        // setSelectedClient(null);
    };

    // Function to handle deleting a client
    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    return (

        <Box sx={{width: '100%'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Typography level="body-sm"
                            sx={{margin: '0 auto', textAlign: 'center', pb: 2, fontWeight: '700', fontSize: 40,}}>
                    Appointments
                </Typography>
                <Button onClick={() => handleClickOpen()} variant="contained" sx={{
                    backgroundColor: 'red',
                    '&:hover': {
                        backgroundColor: '#009688', // Hover color
                    },
                    paddingY: 1.2,
                    borderRadius: 20,
                    color: 'white', width: '16%'
                }} endIcon={<ControlPointSharpIcon/>}>
                    Add Appointments
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
                    stripe="odd"
                    hoverRow
                >
                    <thead>
                    <tr style={{backgroundColor: '#212121'}}>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 130}}>Name</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 80}}>Gender</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 180}}>Email</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 130}}>Phone</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 130}}>Date</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 110}}>Time</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 130}}>Status</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 120}}>Expert</th>
                        <th style={{fontWeight:'500',color: '#ffffff', width: 100}}>Edite</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client,index) => (
                        <TableRow key={client.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' },
                            backgroundColor: index % 2 === 0 ? '#abebf2' : 'white', // Stripe effect
                        }}>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black'}}>{client.name}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black'}}>{client.gender}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black'}}>{client.email}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black'}}>{client.phone}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black','&:hover': { backgroundColor: '#f0f0f0'},backgroundColor: '#ffe5f3'}}>Rs.{client.date}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black','&:hover': { backgroundColor: '#f0f0f0'},backgroundColor: '#ffe5f3'}}>Rs.{client.time}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black'}}>Rs.{client.status}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black'}}>Rs.{client.expert}</TableCell>
                            <TableCell sx={{border: '0.5px solid #ddd',borderColor:'black'}}>
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
                            </TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </Table>
            </Sheet>
            {/* Reusable Dialog Component */}
            <CustomDialog
                open={open}
                onClose={handleClose}
                title={'Add Appointment'}
                actions={
                    <>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button onClick={handleSave} color="primary" variant="contained">Save</Button>
                    </>
                }
            >
                <TextField label="Name" variant="standard" fullWidth margin="dense" name="name" value={formValues.name}
                           onChange={handleInputChange}/>
                <TextField label="Gender" variant="standard" fullWidth margin="dense" name="gender"
                           value={formValues.gender} onChange={handleInputChange}/>
                <TextField label="Email" variant="standard" fullWidth margin="dense" name="email"
                           value={formValues.email} onChange={handleInputChange}/>
                <TextField label="Phone" variant="standard" fullWidth margin="dense" name="phone"
                           value={formValues.phone} onChange={handleInputChange}/>
                <TextField label="Date" variant="standard" fullWidth margin="dense" name="date"
                           value={formValues.date} onChange={handleInputChange}/>
                <TextField label="Time" variant="standard" fullWidth margin="dense" name="time"
                           value={formValues.time} onChange={handleInputChange}/>
                <TextField label="Status" variant="standard" fullWidth margin="dense" name="status"
                           value={formValues.status} onChange={handleInputChange}/>
                <TextField label="Expert" variant="standard" fullWidth margin="dense" name="expert"
                           value={formValues.expert} onChange={handleInputChange}/>
            </CustomDialog>
        </Box>


    );
};

export default Appointment;
