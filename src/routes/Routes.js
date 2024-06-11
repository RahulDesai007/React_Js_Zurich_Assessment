import React, { useState } from 'react';

//Material UI Icons
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


//Imported components
import Dashboard from '../pages/Dashboard'
import Read from '../pages/Customers'
import Create from '../pages/Create'
import Quotes from '../pages/Quotes'
import Payments from '../pages/Payment'


//React Router
import { Route, Switch } from "react-router-dom";

const drawerWidth = 240;







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






export default function Routes() {
    const [open, setOpen] = useState(false);







    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };




    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Box component="main" sx={{ flexGrow: 1, mt: 5 }}>


                <DrawerHeader />

                <React.Fragment>
                    <CssBaseline />
                    <Container >
                        <Switch>
                            {/* <Route exact path="/" component={Login} /> */}
                           
                                    <Route exact path="/Dashboard" component={Dashboard} />
                                    <Route path="/Customer" component={Read} />
                                    <Route path="/Create" component={Create} />
                                    <Route path="/Quotes" component={Quotes} />
                                    <Route path="/Payments" component={Payments} />
                                
                          
                               
                            
                        </Switch>
                    </Container>
                </React.Fragment>




            </Box>
        </Box >
    );
}
