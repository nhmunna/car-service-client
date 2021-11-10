import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    return (
        <Box sx={{ p: 2, my: 2 }}>
            <Grid container spacing={1} sx={{ boxShadow: 3, bgcolor: 'background.paper' }} >
                <Grid item xs={12} sm={12} sx={{ mx: "auto", color: 'black' }}>
                    <h2>wondercar.com</h2>
                    <p>We are the most trusted <b>CAR SELLER</b> in your town. We provide your desire car with low cost. Our motto is <b>"CUSTOMER SATISFACTION"</b></p>
                    <p>Address:</p>
                    <p>1123,xyz street, BanglaBazar.</p>
                    <p>Mobile: +88018XXXXXX</p>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutUs;