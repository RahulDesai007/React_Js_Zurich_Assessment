import React, { useState } from 'react';

//Material UI Icons
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import { deepOrange } from '@mui/material/colors'
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Container from '@mui/material/Container';


//Imported components
import Login from '../../pages/Login'
import DrawerButton from '../../button/DrawerButton'
import Dashboard from '../../pages/Dashboard'
import Customer from '../../pages/Customer'
import Form from '../../pages/Form'
import Data from '../../pages/Data'
import Product from '../../pages/Product'
import Error from '../../pages/Error'
import Routes from '../../routes/Routes'

//React Router
import { Route, Switch } from "react-router-dom";

const drawerWidth = 240;

//Drawer Components
const items = [
  
    {
        href: '/Dashboard',
        icon: (<BarChartIcon fontSize="large" />),
        title: 'Dashboard'
    },
    {
        href: '/Customer',
        icon: (<SupportAgentIcon fontSize="large" />),
        title: 'Customers'
    },
    {
        href: '/Product',
        icon: (<ProductionQuantityLimitsIcon fontSize="large" />),
        title: 'Product'
    },
    {
        href: '/Form',
        icon: (<AccountBalanceIcon fontSize="large" />),
        title: 'Form'
    },
    {
        href: '/Data',
        icon: (<FoodBankIcon fontSize="large" />),
        title: 'Data'
    },
    {
        href: '/Login',
        icon: (<LoginIcon fontSize="large" />),
        title: 'Login'
    },
    {
        href: '/Register',
        icon: (<VpnKeyIcon fontSize="large" />),
        title: 'Register'
    }
];








const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const DrawerBody = styled('div')(() => ({
    backgroundColor: '#2a0d3c',
    height: '100%'
}));



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Layout() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  

 
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><VpnKeyIcon fontSize="small" />Change Password</MenuItem>
            <MenuItem onClick={handleMenuClose}><LogoutOutlinedIcon fontSize="small" />Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
           
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="inherit">
                <Toolbar>

                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            color: '#555b6d',
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Material UI Template
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                       
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                      



                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Box sx={{ backgroundColor: '#2a0d3c', color: 'white' }} >
                    <marquee style={{ marginTop: '5px' }}>
                        WFH – Create a routine – Maintain work routine – Talk & share experiences – Take regular breaks and keep fit ….
                    </marquee>
                </Box>
            </AppBar>

            {renderMobileMenu}
            {renderMenu}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <DrawerBody>

                    {(open) ? (
                        <>
                            <List>

                                <Grid container paddingLeft={3} justifyContent="left">
                                    {/* <Avatar
                                        sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}>
                                        RD
                                    </Avatar> */}


                                    <Typography sx={{ fontWeight: 'bold', color: 'white' }}>RAHUL MANGESH DESAI</Typography>
                                    <Typography sx={{ fontWeight: 'bold', color: 'white' }}>(46121842-U)</Typography>
                                </Grid>
                            </List>
                            <Grid container >
                                <Typography paddingLeft={3} marginTop={2} sx={{ color: '#7a7e8c', textAlign: 'left' }}>Menu</Typography>
                            </Grid>
                            <List sx={{ color: 'white' }} marginTop={2}>

                                <Box sx={{ flexGrow: 1 }}  >
                                    {items.map((item) => (

                                        <DrawerButton
                                            key={item.title}
                                            icon={item.icon}
                                            href={item.href}
                                            title={item.title}
                                        />
                                    ))}
                                </Box>
                            </List>
                        </>
                    ) : (
                        <>
                            <List sx={{ color: 'white' }} marginTop={2}>

                                <Box sx={{ flexGrow: 1 }} marginTop={5}  >
                                    {items.map((item) => (

                                        <DrawerButton
                                            key={item.title}
                                            icon={item.icon}
                                            href={item.href}
                                            title={item.title}
                                        />
                                    ))}
                                </Box>
                            </List>
                        </>
                    )}

                </DrawerBody>
            </Drawer>
         
        </Box >
    );
}
