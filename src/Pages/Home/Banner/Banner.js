import { Container, Grid } from '@mui/material';
import banner from '../../../images/Lamborghini-Terzo-Millennio-s-3_M.jpg';
import React from 'react';

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} >
                    <img style={{ width: '100%' }} src={banner} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;