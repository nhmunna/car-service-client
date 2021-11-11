import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    //LOAD DATA FROM SERVER
    useEffect(() => {
        fetch('https://vast-everglades-91773.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 5, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;