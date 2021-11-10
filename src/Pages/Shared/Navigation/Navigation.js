import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const style = {
    textDecoration: 'none',
    color: 'white'
}

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Wonder Car
                    </Typography>
                    <NavLink style={style} to='/home'><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={style} to='/explore'><Button color="inherit">Explore</Button></NavLink>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={style} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={style} to='/login'><Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;