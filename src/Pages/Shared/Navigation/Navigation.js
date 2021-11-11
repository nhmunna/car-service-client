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
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


// const style = {
//     textDecoration: 'none',
//     color: 'white'
// }

const Navigation = () => {
    const { user, logOut } = useAuth();

    const theme = useTheme();

    const useStyle = makeStyles({
        navItem: {
            color: 'white',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important'
            },
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left !important'
            },
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: 'black'
        }
    })

    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {/* <ListItem button>
                    <ListItemText><NavLink className={mobileNavItem} to='/home'><Button color="inherit">Home</Button></NavLink></ListItemText>
                    <Divider />
                    <ListItemText><NavLink className={mobileNavItem} to='/explore'><Button color="inherit">Explore</Button></NavLink></ListItemText>
                    <Divider />
                    <ListItemText>
                        {
                            user?.email ?
                                <>
                                    <NavLink className={mobileNavItem} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>
                                    <Button onClick={logOut} color="inherit">Logout</Button>
                                </>
                                :
                                <NavLink className={mobileNavItem} to='/login'><Button color="inherit">Login</Button></NavLink>
                        }
                    </ListItemText>
                    <Divider />
                </ListItem> */}
                <Box >
                    <NavLink className={mobileNavItem} to='/home'><Button color="inherit">Home</Button></NavLink>
                    <Divider />
                    <NavLink className={mobileNavItem} to='/explore'><Button color="inherit">Explore</Button></NavLink>
                    <Divider />
                    {
                        user?.email ?
                            <>
                                <NavLink className={mobileNavItem} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>
                                <Divider />
                                <Button onClick={logOut} color="inherit">Logout</Button>
                                <Divider />
                            </>
                            :
                            <NavLink className={mobileNavItem} to='/login'><Button color="inherit">Login</Button></NavLink>
                    }
                </Box>
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Wonder Car
                        </Typography>
                        <Box className={navItemContainer}>
                            <NavLink className={navItem} to='/home'><Button color="inherit">Home</Button></NavLink>
                            <NavLink className={navItem} to='/explore'><Button color="inherit">Explore</Button></NavLink>
                            {
                                user?.email ?
                                    <>
                                        <NavLink className={navItem} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>
                                        <Button onClick={logOut} color="inherit">Logout</Button>
                                    </>
                                    :
                                    <NavLink className={navItem} to='/login'><Button color="inherit">Login</Button></NavLink>
                            }
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment >
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navigation;