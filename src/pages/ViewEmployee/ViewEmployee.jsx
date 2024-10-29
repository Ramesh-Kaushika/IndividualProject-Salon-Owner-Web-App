import React, { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';
import {Button, TableCell, TableRow, TextField} from '@mui/material';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import CustomDialog from "../../components/CustomDialog/CustomDialog.jsx";


const ViewEmployee = () => {
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [formValues, setFormValues] = useState({
        name: '',
        position: '',
        email: '',
        phone: '',
        employee_salary: '',
    });

    const [clients, setClients] = useState([
        { id: 1, name: 'Ramesh', position: 'Hair Specialist', email: 'alice@example.com', phone: '123-456-7890', employee_salary: '20000/=' },
        { id: 2, name: 'Kaushika', position: 'Nail Polisher', email: 'bob@example.com', phone: '234-567-8901', employee_salary: '50000/=' },
        { id: 3, name: 'Nirushi', position: 'Skin Specialist', email: 'charlie@example.com', phone: '345-678-9012', employee_salary: '70000/=' },
    ]);

    const handleClickOpen = (client = null) => {
        if (client) {
            setIsEdit(true);
            setSelectedClient(client);
            setFormValues({
                name: client.name,
                position: client.position,
                email: client.email,
                phone: client.phone,
                employee_salary: client.employee_salary,
            });
        } else {
            setIsEdit(false);
            setFormValues({ name: '', position: '', email: '', phone: '', employee_salary: '' });
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedClient(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSave = () => {
        if (isEdit) {
            // Update the client
            setClients(
                clients.map((client) => (client.id === selectedClient.id ? { ...client, ...formValues } : client))
            );
        } else {
            // Add new client
            const newClient = { ...formValues, id: clients.length + 1 };
            setClients([...clients, newClient]);
        }
        handleClose();
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography level="body-sm" sx={{ margin: '0 auto', textAlign: 'center', pb: 2, fontWeight: '700', fontSize: 40 }}>
                        Employees Dashboard
                    </Typography>
                    <Button onClick={() => handleClickOpen()} variant="contained" sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: '#009688' }, paddingY: 1.2, borderRadius: 20, color: 'white', width: '15%' }} endIcon={<ControlPointSharpIcon />}>
                        Add Employees
                    </Button>
                </Box>
                {/* Table displaying employee data */}
                <Sheet variant="outlined" sx={{ overflow: 'auto' }}>
                    <Table borderAxis="bothBetween" stripe="odd" hoverRow>
                        <thead>
                        <TableRow sx={{ backgroundColor: '#212121' }}>
                            <TableCell sx={{ color: '#ffffff', width: 200 }}>Name</TableCell>
                            <TableCell sx={{ color: '#ffffff', width: 200 }}>Position</TableCell>
                            <TableCell sx={{ color: '#ffffff', width: 200 }}>Email</TableCell>
                            <TableCell sx={{ color: '#ffffff', width: 200 }}>Phone</TableCell>
                            <TableCell sx={{ color: '#ffffff', width: 200 }}>Employee Salary</TableCell>
                            <TableCell sx={{ color: '#ffffff', width: 200 }}>Actions</TableCell>
                        </TableRow>
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
                                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleClickOpen(client)}
                                        >
                                            Edit
                                        </Button>
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
                    title={isEdit ? 'Edit Employee' : 'Add Employee'}
                    actions={
                        <>
                            <Button onClick={handleClose} color="primary">Cancel</Button>
                            <Button onClick={handleSave} color="primary" variant="contained">Save</Button>
                        </>
                    }
                >
                    <TextField label="Name" variant="standard" fullWidth margin="dense" name="name" value={formValues.name} onChange={handleInputChange} />
                    <TextField label="Position" variant="standard" fullWidth margin="dense" name="position" value={formValues.position} onChange={handleInputChange} />
                    <TextField label="Email" variant="standard" fullWidth margin="dense" name="email" value={formValues.email} onChange={handleInputChange} />
                    <TextField label="Phone" variant="standard" fullWidth margin="dense" name="phone" value={formValues.phone} onChange={handleInputChange} />
                    <TextField label="Employee Salary" variant="standard" fullWidth margin="dense" name="employee_salary" value={formValues.employee_salary} onChange={handleInputChange} />
                </CustomDialog>
            </Box>
        </>
    );
};

export default ViewEmployee;
