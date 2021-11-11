import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <Box sx={{ width: '75%', p: 2, my: 2 }}>
            <img style={{ width: '100%' }} src={notFound} />
        </Box>
    );
};

export default NotFound;