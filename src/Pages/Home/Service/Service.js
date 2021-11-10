import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = (props) => {
    const { name, text, img, price } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ boxShadow: 1 }}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="car"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;