import { Alert, Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [orderDelete, setOrderDelete] = useState(false);

    useEffect(() => {
        const url = `https://vast-everglades-91773.herokuapp.com/orders/admin`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure To Delete?");
        if (proceed) {
            const url = `https://vast-everglades-91773.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        setOrderDelete(true);
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            {
                orderDelete && <Alert severity="success">Order Deleted Successfully.</Alert>
            }
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h2" component="div">
                        Order: {orders.length}
                    </Typography>
                    {
                        orders.map(order =>
                            <Box key={order._id}>
                                <Typography variant="h6" component="div">
                                    Order Name:{order.serviceName}
                                </Typography>
                                <Button type="submit" variant="contained" onClick={() => handleDelete(order._id)}>Cancel order</Button>
                            </Box>)
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export default ManageAllOrders;