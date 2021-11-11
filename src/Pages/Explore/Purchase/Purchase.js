import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { serviceId } = useParams();
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [service, setService] = useState({});
    const { user } = useAuth();
    const { name, text, price } = service;
    useEffect(() => {
        fetch(`https://vast-everglades-91773.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    const initialInfo = { address: '', phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        // alert("submitting");

        //collect data
        const order = {
            ...orderInfo,
            serviceName: name,
            userName: user.displayName,
            email: user.email
        }
        console.log(order);


        //send data to server
        fetch('https://vast-everglades-91773.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setOrderSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            {
                orderSuccess && <Alert severity="success">Order Booked Successfully.</Alert>
            }
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {price}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box >
                        <form onSubmit={handleOrderSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="userName"
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="email"
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="address"
                                onBlur={handleOnBlur}
                                defaultValue="Your address"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                defaultValue="Your Phone Number"
                                size="small"
                            />
                            <br />
                            <Button type="submit" variant="contained">SUBMIT</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Purchase;