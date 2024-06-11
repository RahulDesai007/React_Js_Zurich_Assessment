import React from 'react';
import { Box, Button, ListItem, Grid }from '@mui/material';
import { Link} from "react-router-dom";
import { styled } from "@mui/material/styles";

const DrawerButton = (props) => {
   
    const { href, icon, title, ...others } = props;
   
    const BootstrapButton = styled(Button)({    
        fontSize: 16,
        padding: "6px 12px",
        lineHeight: 1.5,
        color: "yellow",
        borderColor: "#0063cc",
        width: '250px',
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(","),
        "&:hover": {
          backgroundColor: "rgba(255,255,255, 0.08)",
          color: "yellow",
          width: '250px',
        },
        "&:active": {
          backgroundColor: "rgba(255,255,255, 0.08)",
          color: "yellow",
          width: '250px',
        },
        "&:focus": {
            backgroundColor: "rgba(255,255,255, 0.08)",
            color: "yellow",
            width: '250px',
        }
      });
      
    return (
        <Grid>
            <ListItem
                disableGutters
                sx={{
                    display: 'flex',
                    mb: 0.5,
                    py: 0,
                    px: 0,
                }}
                {...others}
            >
                <Link 
                   href='#'
                   to={href}
                   style={{textDecoration:"none"}}
                   >
                
                    <BootstrapButton
                        component="a"
                        startIcon={icon}
                        //     //disableRipple
                        sx={{
                            borderRadius: 1,
                            color: 'white',
                            justifyContent: 'flex-start',
                            px: 3,
                            textAlign: 'left',
                            textTransform: 'none',
                            width: '125%',                        
                            fontSize: '15px',
                            '.css-1d6wzja-MuiButton-startIcon>*:nth-of-type(1)': {
                                fontSize: 28
                            },
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255, 0.08)',
                                color: 'yellow',
                            }
                        }}
                    >
                        <Box sx={{ flexGrow: 1, px: 2 }}>
                            {title}
                        </Box>
                    </BootstrapButton>
                </Link>
            </ListItem>
            
      {/* <Outlet /> */}
        </Grid>
    )
};

export default DrawerButton
