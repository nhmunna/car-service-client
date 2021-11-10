import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    //LOAD DATA FROM SERVER
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;