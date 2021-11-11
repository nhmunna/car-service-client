import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const ShowReviews = (props) => {
    const { userName, review } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ boxShadow: 1 }}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ShowReviews;