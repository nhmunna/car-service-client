import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ShowReviews from '../ShowReviews/ShowReviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    //LOAD DATA FROM SERVER
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 5, color: 'success.main' }} variant="h6" component="div">
                    OUR REVIEWS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <ShowReviews
                            key={review._id}
                            review={review}></ShowReviews>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;