import React, { useState } from 'react';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';
import {Button, TextField} from "@mui/material";
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import CustomDialog from "../../components/CustomDialog/CustomDialog.jsx";

const AddPromotion = () => {
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        discount: '',
    });
    // Sample data for the table
    const [clients, setClients] = useState([
        { id: 1, title: 'Hair Cutting', description: 'Male & Female', startDate: '2024.10.10', endDate: '2024.10.30', discount:'70%', },
        { id: 2, title: 'Makeup', description: 'With Facial', startDate: '2024.11.10', endDate: '2024.11.20',  discount:'50%', },
        { id: 3, title: 'Dressing', description: 'Male & Female', startDate: '2024.12.10', endDate: '2024.12.29',  discount:'20%', },
    ]);
    const handleClickOpen = () => {
        setFormValues({
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            discount: '',});
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
        <Box sx={{ width: '100%' }}>
            <Box sx={{display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
            }}>
                <Typography level="body-sm" sx={{margin:'0 auto', textAlign: 'center', pb: 2, fontWeight:'700', fontSize:40, }}>
                    Promotions
                </Typography>
                <Button  onClick={() => handleClickOpen()} variant="contained" sx={{
                    backgroundColor: 'red',
                    '&:hover': {
                        backgroundColor: '#009688', // Hover color
                    },
                    paddingY:1.2,
                    borderRadius:20,
                    color: 'white', width:'15%'}} endIcon={<ControlPointSharpIcon/>}>
                    Add Promotions
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
                        <th style={{ color: '#ffffff',width: 200 }}>Title</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Description</th>
                        <th style={{ color: '#ffffff',width: 200 }}>StartDate</th>
                        <th style={{ color: '#ffffff',width: 200 }}>EndDate</th>
                        <th style={{ color: '#ffffff',width: 80 ,}}>Discount</th>
                        <th style={{ color: '#ffffff',width: 100, textAlign:'center' }}>Edite</th>

                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.title}</td>
                            <td>{client.description}</td>
                            <td style={{ backgroundColor: '#ffe5f3' }}>{client.startDate}</td>
                            <td style={{ backgroundColor: '#ffe5f3' }}>{client.endDate}</td>
                            <td style={{ textAlign:'center', fontWeight:'700', fontSize: 16}}>{client.discount}</td>
                            <td>
                                <Box sx={{ display: 'flex', gap: 1 , justifyContent: 'center', alignItems: 'center'  }}>
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
            {/* Reusable Dialog Component */}
            <CustomDialog
                open={open}
                onClose={handleClose}
                title={'Add Promotion'}
                actions={
                    <>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button onClick={handleSave} color="primary" variant="contained">Save</Button>
                    </>
                }
            >
                <TextField label="Title" variant="standard" fullWidth margin="dense" name="title" value={formValues.title}
                           onChange={handleInputChange}/>
                <TextField label="Description" variant="standard" fullWidth margin="dense" name="description"
                           value={formValues.description} onChange={handleInputChange}/>
                <TextField label="StartDate" variant="standard" fullWidth margin="dense" name="startDate"
                           value={formValues.startDate} onChange={handleInputChange}/>
                <TextField label="EndDate" variant="standard" fullWidth margin="dense" name="endDate"
                           value={formValues.endDate} onChange={handleInputChange}/>
                <TextField label="Discount" variant="standard" fullWidth margin="dense" name="discount"
                           value={formValues.discount} onChange={handleInputChange}/>
            </CustomDialog>
        </Box>


    );
};

export default AddPromotion;
