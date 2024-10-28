import React, { useState } from 'react';

const AddPromotion = () => {
    // Sample data for the table
    const [clients, setClients] = useState([
        { id: 1, name: 'Alice', gender: 'Female', email: 'alice@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Bob', gender: 'Male', email: 'bob@example.com', phone: '234-567-8901' },
        { id: 3, name: 'Charlie', gender: 'Male', email: 'charlie@example.com', phone: '345-678-9012' },
    ]);

    // Function to handle deleting a client
    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    return (
        <div>
            <h2>Client Base</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.gender}</td>
                        <td>{client.email}</td>
                        <td>{client.phone}</td>
                        <td>
                            <button onClick={() => deleteClient(client.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddPromotion;
