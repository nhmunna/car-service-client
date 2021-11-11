import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const AddAProduct = () => {
    const [postServiceSuccess, setPostServiceSuccess] = useState(false);


    const initialInfo = { name: '', text: '', price: '', img: '' }
    const [serviceInfo, setServiceInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...serviceInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setServiceInfo(newInfo);
    }

    const handleServiceSubmit = e => {
        // alert("submitting");

        //collect data
        const service = {
            ...serviceInfo
        }
        // console.log(order);


        //send data to server
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setPostServiceSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            {
                postServiceSuccess && <Alert severity="success">Service added Successfully.</Alert>
            }
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box >
                        <form onSubmit={handleServiceSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="name"
                                onBlur={handleOnBlur}
                                defaultValue="Service Name"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="text"
                                onBlur={handleOnBlur}
                                defaultValue="Service Details"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="price"
                                onBlur={handleOnBlur}
                                defaultValue="Service Price"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="img"
                                onBlur={handleOnBlur}
                                defaultValue="Service Image"
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

export default AddAProduct;