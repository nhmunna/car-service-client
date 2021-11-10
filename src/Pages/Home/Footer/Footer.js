import { Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../../images/logo.jpg';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'primary.contrastText', p: 2 }}>
            <Grid container spacing={1} >
                <Grid item xs={12} sm={12} >
                    <Avatar sx={{ mx: "auto" }} src={logo} />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ mx: "auto", color: 'white' }}>
                    nhmunna@2021
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;