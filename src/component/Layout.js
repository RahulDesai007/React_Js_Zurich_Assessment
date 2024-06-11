import React, { useState } from 'react';

//Material UI Icons
import { styled, useTheme } from '@mui/material/styles';
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
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useHistory } from "react-router-dom";


//Imported components
import DrawerButton from '../button/DrawerButton'
import Routes from '../routes/Routes'
import Footer from './Footer'
import Error from '../pages/Error'

//React Router
import { Route, Switch } from "react-router-dom";
const drawerWidth = 240;

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

//Drawer Components
const items = [

    {
        href: '/Dashboard',
        icon: (<BarChartIcon fontSize="large" />),
        title: 'Dashboard'
    },

    {
        href: '/Create',
        icon: (<AssignmentIcon fontSize="large" />),
        title: 'Account Creation'
    },

    {
        href: '/Customer',
        icon: (<PeopleAltIcon fontSize="large" />),
        title: 'Customer Details'
    },

    {
        href: '/Quotes',
        icon: (<RequestQuoteIcon fontSize="large" />),
        title: 'Purchase / Renew'
    },
    {
        href: '/Payments',
        icon: (<AccountBalanceIcon fontSize="large" />),
        title: 'Payment / Submit'
    },
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
    // necessary for content to be below app bar
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
    const history = useHistory();


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

    const handleMenuCloseButton = (event) => {
        event.preventDefault();
        localStorage.clear();
        history.push('/Login')
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
            <MenuItem onClick={handleMenuCloseButton}><LogoutOutlinedIcon fontSize="small" />Logout</MenuItem>
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
        <>
            {localStorage.getItem("setAuthFlag") ? (
                <>
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
                        Zurich Web Assessment
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <div className="ml-auto p-2" style={{ lineHeight: "16px", textAlign: "right" }}>Welcome
                            <br></br>
                            Guest 
                        </div>
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
                            NOTE : This is a Zurich assessment application with a dummy dashboard designed just for Demonstration purpose
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
                                        <Typography sx={{ fontWeight: 'bold', color: 'white' }}>Today's Date : {`${day}-${month}-${year}`}</Typography>
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
                <Box component="main" sx={{ flexGrow: 1 }}>

                    <Routes />
                </Box>
            </Box >
            <Footer />
            </>
            ) : (
                <Switch>
                    <Route component={Error} />
                </Switch>
            )}
            </>
    );
    
}
