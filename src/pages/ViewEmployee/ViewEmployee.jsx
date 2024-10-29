import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';



const ViewEmployee = () => {

    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        position: '',
        email: '',
        phone: '',
        employee_salary: '',
    });

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Sample data for the table
    const [clients, setClients] = useState([
        { id: 1, name: 'Ramesh', position: 'Hair Specialist', email: 'alice@example.com', phone: '123-456-7890',employee_salary:'20000/=' },
        { id: 2, name: 'Kaushika', position: 'Nail Polisher', email: 'bob@example.com', phone: '234-567-8901', employee_salary:'50000/='},
        { id: 3, name: 'Nirushi', position: 'Skin Specialist', email: 'charlie@example.com', phone: '345-678-9012', employee_salary:'70000/=' },
    ]);

    // Function to handle deleting a client
    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
            <Box sx={{display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
            }}>
                <Typography level="body-sm" sx={{margin:'0 auto', textAlign: 'center', pb: 2, fontWeight:'700', fontSize:40, }}>
                    Employees Dashboard
                </Typography>
                <Button onClick={handleClickOpen} variant="contained" sx={{
                    backgroundColor: 'red',
                    '&:hover': {
                        backgroundColor: '#009688', // Hover color
                    },
                    paddingY:1.2,
                    borderRadius:20,
                    color: 'white', width:'15%'}} endIcon={<ControlPointSharpIcon/>}>
                    Add Employees
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
                        <th style={{ color: '#ffffff',width: 200 }}>Name</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Position</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Email</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Phone</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Employee Salary</th>
                        <th style={{ color: '#ffffff',width: 200 }}>Edit</th>

                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.position}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                            <td>Rs.{client.employee_salary}</td>
                            <td>
                                <Box sx={{ display: 'flex', gap: 1 , justifyContent: 'center', alignItems: 'center'  }}>
                                    <Button
                                        size="sm"
                                        variant="soft"
                                        sx={{
                                            color: 'white',
                                            backgroundColor: 'darkgreen',
                                            '&:hover': {
                                                backgroundColor: 'green', // Hover color
                                            },
                                        }}
                                    >
                                        Edit
                                    </Button>
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
            <Dialog open={open} onClose={handleClose}  PaperProps={{
                sx: { borderRadius: '30px' }
            }}>
                <DialogTitle sx={{fontWeight:'500'}} >Add Employee</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        variant="standard"
                        fullWidth
                        margin="dense"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Position"
                        variant="standard"
                        fullWidth
                        margin="dense"
                        name="position"
                        value={formValues.position}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        fullWidth
                        margin="dense"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Phone"
                        variant="standard"
                        fullWidth
                        margin="dense"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Employee Salary"
                        variant="standard"
                        fullWidth
                        margin="dense"
                        name="employee_salary"
                        value={formValues.employee_salary}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center',}}>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary" variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
        </>

    );
};

export default ViewEmployee;
