import { Alert, Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [reviewSuccess, setReviewSuccess] = useState(false);
    const { user } = useAuth();



    const initialInfo = { review: '' }
    const [reviewInfo, setReviewInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setReviewInfo(newInfo);
    }

    const handleReviewSubmit = e => {
        // alert("submitting");

        //collect data
        const order = {
            ...reviewInfo,
            userName: user.displayName,
        }
        console.log(order);


        //send data to server
        fetch('https://vast-everglades-91773.herokuapp.com/review', {
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
                    setReviewSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            {
                reviewSuccess && <Alert severity="success">Review added Successfully.</Alert>
            }
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box >
                        <form onSubmit={handleReviewSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="userName"
                                defaultValue={user.displayName}
                                size="small"
                            />

                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="review"
                                onBlur={handleOnBlur}
                                defaultValue="Your review"
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

export default Review;